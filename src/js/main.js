const sum = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const mul = (num1, num2) => num1 * num2;
const div = (num1, num2) => ((num2 === 0) ? 'Nao é possivel divisao por zero' : num1 / num2);

export { sum, sub, mul, div };
