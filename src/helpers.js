export const expressionToString = (operator, num1, num2) => `${num1} ${operator} ${num2}`;

export const generateRandomNum = (
  min = 0,
  max = 100,
) => Math.floor(Math.random() * (max - min) + min);
