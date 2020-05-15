export const empty = () => {}; // eslint hack

export const generateRandomNum = (
  min = 0,
  max = 100,
) => Math.floor(Math.random() * (max - min) + min);
