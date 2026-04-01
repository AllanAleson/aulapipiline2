function soma(a, b) {
  return a + b;
}

test('soma de 10 + 5 deve ser 15', () => {
  expect(soma(10, 5)).toBe(15);
});