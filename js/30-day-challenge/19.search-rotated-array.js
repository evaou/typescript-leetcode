"use strict";
/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
*/
function searchRotatedArray(nums, target) {
    let lowIdx = 0;
    let highIdx = nums.length - 1;
    let midIdx;
    let startIdx;
    let targetIdx;
    while (lowIdx < highIdx) {
        midIdx = Math.floor((lowIdx + highIdx) / 2);
        if (nums[midIdx] > nums[highIdx]) {
            lowIdx = midIdx + 1;
        }
        else {
            highIdx = midIdx;
        }
        if (lowIdx === highIdx) {
            break;
        }
    }
    startIdx = lowIdx;
    lowIdx = 0;
    highIdx = nums.length - 1;
    while (lowIdx <= highIdx) {
        midIdx = Math.floor((lowIdx + highIdx) / 2);
        targetIdx = (midIdx + startIdx) % nums.length;
        if (nums[targetIdx] === target) {
            return targetIdx;
        }
        if (nums[targetIdx] > target) {
            highIdx = midIdx - 1;
        }
        else {
            lowIdx = midIdx + 1;
        }
    }
    return -1;
}
let nums = [1, 3];
let target = 1;
console.log(searchRotatedArray(nums, target)); // 0
nums = [4, 5, 6, 7, 0, 1, 2];
target = 0;
console.log(searchRotatedArray(nums, target)); // 4
nums = [4, 5, 6, 7, 0, 1, 2];
target = 3;
console.log(searchRotatedArray(nums, target)); // -1
//# sourceMappingURL=19.search-rotated-array.js.map