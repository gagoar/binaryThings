/**
 ### Longest Substring Without Repeating Characters
 Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */


export const lengthOfLongestSubstring = function (s: string): number {
  let longest = 0;

  if (!s) {
    return longest;
  }

  longest = 1;
  const acc = s.split('').reduce((prefix, char) => {
    if (prefix.includes(char)) {

      const indexOfChar = prefix.indexOf(char);
      if (indexOfChar !== 0) {
        longest = longest < prefix.length ? prefix.length : longest;
      }

      return prefix.substring(indexOfChar + 1) + char;
    }
    return prefix + char
  }, '');

  return acc && acc.length > longest ? acc.length : longest;

};