// eslint-disable-next-line import/prefer-default-export
export const generateRandomNum = (
  min = 0,
  max = 100,
) => Math.floor(Math.random() * (max - min) + min);
