/*
Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

Example 1:

Input: [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.

Example 2:

Input: [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.

Note: The length of the given binary array will not exceed 50,000.
*/

function findMaxLength(nums: number[]): number {
  let maxLen: number = 0;
  let sumObjs: { [key: number]: number } = {};
  let sum: number = 0;
  let tmpLen: number;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      sum -= 1;
    } else {
      sum += 1;
    }

    if (sum === 0) {
      tmpLen = i + 1;
      maxLen = Math.max(maxLen, tmpLen);
      continue;
    }

    if (sum in sumObjs) {
      tmpLen = i - sumObjs[sum];
      maxLen = Math.max(maxLen, tmpLen);
    } else {
      sumObjs[sum] = i;
    }
  }

  return maxLen;
}

console.log(findMaxLength([0, 1, 0, 1])); // 4
console.log(findMaxLength([0, 1])); // 2
console.log(findMaxLength([0, 1, 0])); // 2
