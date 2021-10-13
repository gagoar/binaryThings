import { findMedianSortedArrays } from '../src/findMedianSortedArrays';

describe('findMedianSortedArrays', () => {
  it('should resolve median when odd', () => {
    const value = findMedianSortedArrays([1, 3], [2]);
    expect(value).toStrictEqual(2);
  });


  it('should resolve medina when even', () => {
    const value = findMedianSortedArrays([1, 2], [3, 4]);
    expect(value).toStrictEqual(2.5);
  });

  it('should resolve medina when even', () => {
    const value = findMedianSortedArrays([3], [-2, -1]);
    expect(value).toStrictEqual(-1);
  });
});
