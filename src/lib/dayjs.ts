import dayJSLib from 'dayjs';
import 'dayjs/locale/pt-br';
import relativeTime from 'dayjs/plugin/relativeTime';

dayJSLib.extend(relativeTime);
dayJSLib.locale('pt-br');

export const dayjs = dayJSLib;
