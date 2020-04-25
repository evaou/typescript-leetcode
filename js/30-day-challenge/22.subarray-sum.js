"use strict";
/*
Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

Example 1:

Input:nums = [1,1,1], k = 2
Output: 2
Note:
The length of the array is in range [1, 20,000].
The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].
*/
var leetCode;
(function (leetCode) {
    function subarraySum(nums, k) {
        let result = 0;
        let sumObj = { 0: 1 };
        let sum = 0;
        let sumDiff;
        for (let i = 0; i < nums.length; i++) {
            sum += nums[i];
            sumDiff = sum - k;
            if (sumDiff in sumObj) {
                result += sumObj[sumDiff];
            }
            if (sum in sumObj) {
                sumObj[sum] += 1;
            }
            else {
                sumObj[sum] = 1;
            }
        }
        return result;
    }
    let nums = [1, 1, 1];
    let k = 2;
    console.log(subarraySum(nums, k));
})(leetCode || (leetCode = {}));
//# sourceMappingURL=22.subarray-sum.js.map