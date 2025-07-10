import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { CreateQuestionResponse } from './types/create-quest-response';
import type { CreateQuestionRequest } from './types/create-question-request';

export function useCreateQuestion(roomId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateQuestionRequest) => {
      const response = await fetch(
        `http://localhost:3333/rooms/${roomId}/questions`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );

      const questionResponse: CreateQuestionResponse = await response.json();

      return questionResponse;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-questions', roomId] });
    },
  });
}
