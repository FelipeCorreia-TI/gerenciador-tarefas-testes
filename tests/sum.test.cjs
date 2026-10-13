const sum = require('../src/sum.cjs');

test('Soma dois números corretamente', () => {
  expect(sum(1, 2)).toBe(4);
});

test('Lança erro ao passar parâmetros não numéricos', () => {
  expect(() => sum(1, 'a')).toThrow('Os parâmetros devem ser números');
});