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

export const longestPalindrome = (s: string): string => {

  let matches = '';
  for (let i = 0; i < s.length; i++) {
    for (let j = s.length; j > 0; j--) {
      const subs = s.substring(i, j);
      if (i !== j && subs[0] === subs[subs.length - 1]) {
        const xsubs = subs.split('').reverse().join('');
        if (xsubs === subs && matches.length < subs.length) {
          matches = subs;
          break;
        }
      }
    }
  }


  return matches;
};