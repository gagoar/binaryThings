import { search } from '../src/binarySearch';

describe('binary Search', () => {
  it('should find the number', () => {
    const arr = [2, 3, 4, 10, 40];

    expect(search(arr, 10)).toBe(3);
  });
  it('should find the number', () => {
    const arr = [2, 3, 4, 8, 10, 11, 22, 30, 40];

    expect(search(arr, 10)).toBe(4);
  });
});
