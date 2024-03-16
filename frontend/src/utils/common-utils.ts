import dayjs from 'dayjs';

export const getCreatedTimestamp = () => ({
  createdAt: dayjs().format('YYYY-MM-DD HH:mm:ss'),
  updatedAt: dayjs().format('YYYY-MM-DD HH:mm:ss'),
  date: dayjs().format('YYYY-MM-DD'),
  time: dayjs().format('HH:mm:ss'),
  day: dayjs().format('DD'),
});

export const getUpdatedTimestamp = () => ({
  updatedAt: dayjs().format('YYYY-MM-DD HH:mm:ss'),
});
