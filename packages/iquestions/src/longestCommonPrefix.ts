/*
 Write a function to find the longest common prefix string amongst an array of strings.
 If there is no common prefix, return an empty string "".

 Example 1:

 Input: ["flower","flow","flight"]
 Output: "fl"
 Example 2:

 Input: ["dog","racecar","car"]
 Output: ""
 Explanation: There is no common prefix among the input strings.
 Note:

 All given inputs are in lowercase letters a-z.
*/
export const longestCommonPrefix = function (strs: string[]): string {

  // we find the shortes string which is how long a max prefix could be. 
  if (strs.length === 0) {
    return '';

  };

  if (strs.length === 1) {
    return strs[0];
  }
  const sizes = strs.map(str => str.length);
  const min = Math.min(...sizes);
  const shortestIndex = sizes.indexOf(min);
  const rest = strs.filter((_str, index) => index !== shortestIndex);

  let prefix = '';

  for (const char of strs[shortestIndex].split('')) {
    if (rest.every(str => str.startsWith(prefix + char))) {
      prefix += char;
    } else {
      break;
    }
  };

  return prefix;

};