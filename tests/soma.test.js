const soma = require('../src/soma');
const subtracao = require('../src/subtracao');
const multiplicacao = require('../src/multiplicacao');
const divisao = require('../src/divisao');

test('soma 2 + 3', () => {
  expect(soma(2, 3)).toBe(5);
});

test('subtracao 5 - 3', () => {
  expect(subtracao(5, 3)).toBe(2);
});

test('multiplicacao 4 * 3', () => {
  expect(multiplicacao(4, 3)).toBe(12);
});

test('divisao 10 / 2', () => {
  expect(divisao(10, 2)).toBe(5);
});
