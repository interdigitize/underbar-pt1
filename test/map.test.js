_ = require('../underbar');

describe('map()', () => {
  it('maps every numbers in an array of numbers to their square', () => {
    const arr = [1, 2, 3, 4, 5];
    const mappedArr = _.map(arr, (el) => el * el);
    expect(mappedArr).toEqual([1, 4, 9, 16, 25]);
  });

  it('maps every number in array to the sum of two of it', () => {
    const arr = [1, 2, 3, 4, 5];
    const mappedArr = _.map(arr, (el) => el + el);
    expect(mappedArr).toEqual([2, 4, 6, 8, 10]);
  });

});
