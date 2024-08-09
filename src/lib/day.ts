import dayjs from 'dayjs';
import 'dayjs/locale/ko';

dayjs.locale('ko');

export const getTimeTypeBarYYYYMMDDHHSS = (date: Date) => dayjs(date).format('YYYY-MM-DD hh:mm:ss');
