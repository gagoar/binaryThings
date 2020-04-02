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

type IsPalindrome = (collection: string[]) => (startEnd: number[]) => boolean;
const isPalindrome: IsPalindrome = (collection) => (occurrences): boolean => {
  let start = occurrences[0];
  let end = occurrences[occurrences.length - 1];
  while (start < end) {
    if (collection[start] === collection[end]) {
      start++;
      end--;
    } else {
      break;
    }
  }
  return start >= end ? true : false;
}

const getBounds = (char: string, _index: number, arr: string[]): number[] => {

  const acc = [];
  let pos = arr.indexOf(char);

  while (pos !== -1) {
    acc.push(pos);
    pos = arr.indexOf(char, pos + 1);
  }
  return acc.length === 1 ? [] : acc;
}
export const longestPalindrome = (s: string): string => {

  if (!s) {
    return '';
  }

  const arr = s.split('');

  const bounds = arr.map(getBounds);

  debugger;
  const palindromes = bounds.filter(isPalindrome(arr));

  const longestPalindrome = palindromes.map((indexes) => indexes[indexes.length - 1] - indexes[0]).sort((a, b) => {
    if (a < b) return 1
    if (b < a) return -1
    return 0;
  });

  if (!longestPalindrome.length) {
    return s[0];
  }
  const coincidences = palindromes[0];

  return arr.slice(coincidences[0], coincidences[coincidences.length - 1] + 1).join('');

};