const _ = require('../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    const nums = [2, 4, 5, 6];
    expect(_.some(nums, num => num % 2 === 1)).toBe(true);
  });

  it('returns false if no number is odd', () => {
    const nums = [2, 4, 6, 8];
    expect(_.some(nums, num => num % 2 === 1)).toBe(false);
  });

  it('returns true if there is a string value in the array', () => {
    const arr = [2, 4, 6, 8, 'Groot'];
    expect(_.some(arr, el => typeof(el) === 'string')).toBe(true);
  });

  it('returns false if there is not a string value in the array', () => {
    const arr = [2, 4, 6, 8];
    expect(_.some(arr, el => typeof(el) === 'string')).toBe(false);
  });

});
