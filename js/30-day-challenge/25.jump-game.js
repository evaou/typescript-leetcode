"use strict";
/*
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

Example 1:

Input: [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum
jump length is 0, which makes it impossible to reach the last index.
*/
function canJump(nums) {
    let farIndex = 0;
    let i;
    for (i = 0; i < nums.length && i <= farIndex; i++) {
        farIndex = Math.max(farIndex, i + nums[i]);
    }
    return i === nums.length;
}
console.log(canJump([2, 3, 1, 1, 4])); // true
console.log(canJump([3, 2, 1, 0, 4])); // false
//# sourceMappingURL=25.jump-game.js.map