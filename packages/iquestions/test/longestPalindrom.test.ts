import { longestPalindrome } from '../src/longestPalindrome';

describe('longestPalindrome', () => {
  it('should find a palindrome', () => {
    const value = longestPalindrome("babad");
    expect(value).toStrictEqual("aba");
  });

  it('should find a palindrome', () => {
    const value = longestPalindrome("cbbd");
    expect(value).toStrictEqual('bb');
  });

  it('should find a palindrome', () => {
    const value = longestPalindrome("bb");
    expect(value).toStrictEqual('bb');
  });

  it('should find a palindrome', () => {
    const value = longestPalindrome("ac");
    expect(value).toStrictEqual('a');
  });
  it('should find a palindrome', () => {
    const value = longestPalindrome("ccc");
    expect(value).toStrictEqual('ccc');
  });

  it('should find the longest palindrome', () => {
    const value = longestPalindrome("abadd");
    expect(value).toStrictEqual("aba");
  });
  it('should find the longest palindrome', () => {
    const value = longestPalindrome("abacab");
    expect(value).toStrictEqual("bacab");
  });

  it('should find the longest palindrome', () => {
    const value = longestPalindrome("babadada");
    expect(value).toStrictEqual("adada");
  });
});
