import { Button } from '@/components/ui/button';
import { useRef, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';

const isRecordingSupported =
  Boolean(navigator.mediaDevices) &&
  typeof navigator.mediaDevices.getUserMedia === 'function' &&
  typeof window.MediaRecorder === 'function';

type RoomParams = {
  roomId: string;
};

export function RecordRoomAudio() {
  const params = useParams<RoomParams>();
  const [isRecording, setIsRecording] = useState(false);
  const recorder = useRef<MediaRecorder | null>(null);

  function handleStopRecording() {
    setIsRecording(false);

    if (recorder.current && recorder.current.state !== 'inactive') {
      recorder.current.stop();
    }
  }

  async function uploadAudio(audio: Blob) {
    const formData = new FormData();

    formData.append('file', audio, 'audio.webm');

    const response = await fetch(
      `http://localhost:3000/rooms/${params.roomId}/audio`,
      {
        method: 'POST',
        body: formData,
      }
    );

    const result = await response.json();

    console.log(result);
  }

  async function handleStartRecording() {
    if (!isRecordingSupported) {
      alert('O seu navegador não suporta gravação de áudio');
      return;
    }

    setIsRecording(true);

    const audio = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        sampleRate: 44_100,
      },
    });

    recorder.current = new MediaRecorder(audio, {
      mimeType: 'audio/webm',
      audioBitsPerSecond: 64_000,
    });

    recorder.current.ondataavailable = async (event) => {
      if (event.data.size > 0) {
        await uploadAudio(event.data);
      }
    };

    recorder.current.onstart = () => {
      console.log('Iniciando gravação');
    };

    recorder.current.onstop = () => {
      console.log('Parando gravação');
    };

    recorder.current.start();
  }

  if (!params.roomId) {
    return <Navigate replace to="/" />;
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      {!isRecording && (
        <Button onClick={handleStartRecording}>Gravar áudio</Button>
      )}

      {isRecording && (
        <Button onClick={handleStopRecording}>Parar gravação</Button>
      )}

      {isRecording ? <p>Gravando...</p> : <p>Pausado</p>}
    </div>
  );
}
