import { twoSum } from '../src/twoSum';

describe('twoSum', () => {
  it('should add Two Numbers', () => {
    const value = twoSum([3, 2, 4], 6);
    expect(value).toStrictEqual([1, 2]);
  });

  it('should add Two Numbers', () => {
    const value = twoSum([2, 7, 11, 15], 9);

    expect(value).toStrictEqual([0, 1]);
  });
});
