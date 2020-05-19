// eslint-disable-next-line import/prefer-default-export
export const generateRandomNum = (
  min = 0,
  max = 99,
) => Math.floor(Math.random() * (max - min + 1) + min);
