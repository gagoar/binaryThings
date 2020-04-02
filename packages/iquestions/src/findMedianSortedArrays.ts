/*
### 4. Median of Two Sorted Arrays
Hard

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
*/

export const findMedianSortedArrays = function (nums1: number[], nums2: number[]): number {
  if (!nums1.length && !nums2.length) {
    return 0;
  }

  const all = nums1.concat(nums2);

  all.sort((a: number, b: number) => {
    if (a > b) {
      return 1;
    }

    if (a < b) {
      return -1;
    }

    return 0;
  });

  const medianPoint = Math.floor(all.length / 2);

  debugger;
  if (all.length % 2) {
    // is odd 
    return all[medianPoint];
  } else {
    // is even
    return (all[medianPoint] + all[medianPoint - 1]) / 2
  }
};
