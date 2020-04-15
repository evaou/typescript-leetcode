"use strict";
/*
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

Note: Please solve it without division and in O(n).
*/
function productExceptSelf(nums) {
    let forwardNums = Array(nums.length).fill(1);
    let backwardNums = Array(nums.length).fill(1);
    let resultNums = [];
    let j;
    for (let i = 0; i < nums.length - 1; i++) {
        j = nums.length - 1 - i;
        forwardNums[i + 1] = forwardNums[i] * nums[i];
        backwardNums[j - 1] = backwardNums[j] * nums[j];
    }
    for (let i = 0; i < nums.length; i++) {
        resultNums.push(forwardNums[i] * backwardNums[i]);
    }
    return resultNums;
}
console.log(productExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]
//# sourceMappingURL=15.product-except-self.js.map