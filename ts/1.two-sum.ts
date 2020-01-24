/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 *
 * https://leetcode.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (44.99%)
 * Likes:    13210
 * Dislikes: 475
 * Total Accepted:    2.5M
 * Total Submissions: 5.5M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * Given an array of integers, return indices of the two numbers such that they
 * add up to a specific target.
 * 
 * You may assume that each input would have exactly one solution, and you may
 * not use the same element twice.
 * 
 * Example:
 * 
 * 
 * Given nums = [2, 7, 11, 15], target = 9,
 * 
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums: number[], target: number) {
    for (let index1 = 0; index1 < nums.length - 1; index1++) {
        let value = target - nums[index1];
        for (let index2 = index1 + 1; index2 < nums.length; index2++) {
            if (nums[index2] === value) {
                return [index1, index2];
            }
        }
    }
    
};
// @lc code=end

