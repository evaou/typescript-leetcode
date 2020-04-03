/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:
Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/

function maxSubArray(nums: number[]): number {
  let sums: number[] = [];
  let endIdxArr: number[] = [];
  let maxSum = -Infinity;
  let tmpSum: number;
  let startIdx: number = 0;

  for (let i = 0; i < nums.length; i++) {
    sums[i] = -Infinity;
    endIdxArr[i] = i;
    tmpSum = 0;

    for (let j = i; j < nums.length; j++) {
      tmpSum += nums[j];

      if (tmpSum > sums[i]) {
        sums[i] = tmpSum;
        endIdxArr[i] = j;
      }
    }

    if (sums[i] > maxSum) {
      maxSum = sums[i];
      startIdx = i;
    }
  }

  console.log(`[${nums.slice(startIdx, endIdxArr[startIdx] + 1)}]`);

  return maxSum;
}

console.log(maxSubArray([-1]));
console.log(maxSubArray([1]));
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
