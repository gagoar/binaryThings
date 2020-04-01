import { lengthOfLongestSubstring } from '../src/longestMatchingSubString';

describe('lengthOfLongestSubstring', () => {
  it('should match without repeating', () => {
    const value = lengthOfLongestSubstring("abcabcbb");
    expect(value).toStrictEqual(3);
  });

  it('should match only one char', () => {
    const value = lengthOfLongestSubstring("bbbbb");

    expect(value).toStrictEqual(1);
  });

  it('should match without repeating', () => {
    const value = lengthOfLongestSubstring("pwwkew");

    expect(value).toStrictEqual(3);
  });
  it('should match without repeating', () => {
    const value = lengthOfLongestSubstring("ohvhjdml");

    expect(value).toStrictEqual(6);
  })
});
