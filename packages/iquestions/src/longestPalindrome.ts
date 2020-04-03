/**
5. Longest Palindromic Substring
Medium
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
*/

type FindLength = (s: string, { left, right }: { left: number, right: number }) => number;

const findLength: FindLength = (s, { left, right }) => {
  while (left >= 0 && right < s.length && s[right] === s[left]) {
    left--;
    right++;
  }
  return right - left - 1;
}

export const longestPalindrome = (s: string): string => {

  if (!s || s.length == 0)
    return "";

  if (s.length === 2 && s[0] !== s[1]) {
    return s[0];
  }

  const { start, end } = Array.from({ length: s.length }).reduce<{ start: number, end: number }>((memo, _char, index) => {
    const l1 = findLength(s, { left: index, right: index });
    const l2 = findLength(s, { left: index, right: index + 1 });

    let { end, start } = memo;
    const len = Math.max(l1, l2);
    if (len > end - start) {
      start = index - (len - 1) / 2;
      end = index + len / 2;
    }

    return { end, start };
  }, { end: 0, start: 0 });

  return s.substring(Math.round(start), end + 1);
};