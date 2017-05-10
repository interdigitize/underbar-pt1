const _ = require('../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const nums = [2, 4, 5, 5, 7, 4, 10, 2];
    expect(_.uniq(nums)).toEqual([2, 4, 5, 7, 10]);
  });

  it('removes duplicates from a list', () => {
    const names = ['Groot', 'Peter, aka Starlord', 'Groot', 'Drax', 'Groot', 'Rocket', 'Gamora', 'Groot'];
    expect(_.uniq(names)).toEqual(['Groot', 'Peter, aka Starlord', 'Drax', 'Rocket', 'Gamora'])
  });

});
