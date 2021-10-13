import { longestCommonPrefix } from '../src/longestCommonPrefix';

describe('longestCommonPrefix', () => {
  it('should return the element if is only one', () => {
    const value = longestCommonPrefix(["flower"]);
    expect(value).toStrictEqual('flower');
  });


  it('this is odd', () => {
    const value = longestCommonPrefix(["aca", "cba"]);
    expect(value).toStrictEqual('');
  });

  it('should find a common prefix', () => {
    const value = longestCommonPrefix(["flower", "flow", "flight"]);
    expect(value).toStrictEqual('fl');
  });

  it('should not find a common prefix', () => {
    const value = longestCommonPrefix(["dog", "racecar", "car"]);

    expect(value).toStrictEqual('');
  });
});
