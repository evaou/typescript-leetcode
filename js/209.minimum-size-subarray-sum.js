"use strict";
/*
 * @lc app=leetcode id=209 lang=javascript
 *
 * [209] Minimum Size Subarray Sum
 *
 * https://leetcode.com/problems/minimum-size-subarray-sum/description/
 *
 * algorithms
 * Medium (36.42%)
 * Likes:    1647
 * Dislikes: 90
 * Total Accepted:    221.5K
 * Total Submissions: 607.3K
 * Testcase Example:  '7\n[2,3,1,2,4,3]'
 *
 * Given an array of n positive integers and a positive integer s, find the
 * minimal length of a contiguous subarray of which the sum ≥ s. If there isn't
 * one, return 0 instead.
 *
 * Example:
 *
 *
 * Input: s = 7, nums = [2,3,1,2,4,3]
 * Output: 2
 * Explanation: the subarray [4,3] has the minimal length under the problem
 * constraint.
 *
 * Follow up:
 *
 * If you have figured out the O(n) solution, try coding another solution of
 * which the time complexity is O(n log n).
 *
 */
// @lc code=start
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
    // set window sum, start,  and end index as 0
    let wSum = 0;
    let wStart = 0;
    let wEnd = 0;
    // set window length as infinity 
    let wLen = Infinity;
    // loop as window start index is less than nums length
    while (wStart < nums.length) {
        // if window sum is less than target and end index is less than nums length
        if (wSum < s && wEnd < nums.length) {
            // extend window by moving end index to right, update window length
            wSum += nums[wEnd];
            wEnd++;
        }
        else if (wSum >= s) {
            // else if window sum is larger or equal to target
            // shrink window by moving start index to right, update window length
            wLen = Math.min(wLen, (wEnd - wStart));
            wSum -= nums[wStart];
            wStart++;
        }
        else {
            // else, leave loop
            break;
        }
    }
    // if window length is infinity, return 0, else return window end index - start index
    if (wLen === Infinity) {
        wLen = 0;
    }
    return wLen;
};
// @lc code=end
//# sourceMappingURL=209.minimum-size-subarray-sum.js.map