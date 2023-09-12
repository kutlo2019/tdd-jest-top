const stringFuncs = require('./string-manip');

test('capitilizes a string', () => {
  expect(stringFuncs.capitalize('cabinet')).toBe('Cabinet');
});

test('reverses a string', () => {
  expect(stringFuncs.reverseString('cabinet')).toBe('tenibac');
});

test('calculator', () => {
  expect(stringFuncs.calculator.add(2,3)).toBe(5);
  expect(stringFuncs.calculator.subtract(3,2)).toBe(1);
  expect(stringFuncs.calculator.divide(6,3)).toBe(2);
  expect(stringFuncs.calculator.multiply(2,3)).toBe(6);
});

test('Caesar Cipher', () => {
  expect(stringFuncs.caesarCipher('abc', 3)).toBe('def');
  expect(stringFuncs.caesarCipher('HeLlo', 4)).toBe('LiPps');
  expect(stringFuncs.caesarCipher('hello!', 2)).toBe('jgnnq#');
});

test('Analyze Array', () => {
  const arr = [1, 8, 3, 4, 2, 6]
  const object = {
    average: 4,
    min: 1,
    max: 8,
    length: 6
  }
  expect(stringFuncs.analyzeArray(arr)).toStrictEqual(object);
});