// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

export const twoSum = (nums: number[], target: number): [number, number | undefined] => {
  let m: number | undefined;
  const n = nums.findIndex((num, index) => {
    debugger;
    m = nums.findIndex(
      (sub, subIndex) => index !== subIndex && sub + num === target
    );

    if (m !== -1) {
      return true;
    }

    return false;
  });
  return [n, m];
};
