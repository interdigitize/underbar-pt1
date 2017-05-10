const _ = require('../underbar');

describe('reduce()', () => {
  it('reduces an array of numbers to a sum, *with* an explicit initial value for the accumulator', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = _.reduce(nums, (acc, num) => acc + num, 0);
    expect(result).toEqual(15);
  });

  it('reduces an array of numbers to a sum, *without* an explicit initial value for the accumulator', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = _.reduce(nums, (a, b) => a + b);
    expect(result).toEqual(15);
  });

  it('reduces an array of numbers to a product, *with* an initial accumulator value', () => {
    const nums = [1, 2, 3, 4];
    const result = _.reduce(nums, (acc, num) => acc * num, 1);
    expect(result).toEqual(24);
  });

  it('reduces an array of numbers to a product, *without* an initial accumulator value', () => {
    const nums = [1, 2, 3, 4];
    const result = _.reduce(nums, (a, b) => a * b);
    expect(result).toEqual(24);
  });

});
