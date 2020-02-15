"use strict";
/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 *
 * https://leetcode.com/problems/valid-anagram/description/
 *
 * algorithms
 * Easy (54.81%)
 * Likes:    1084
 * Dislikes: 128
 * Total Accepted:    461.6K
 * Total Submissions: 841.9K
 * Testcase Example:  '"anagram"\n"nagaram"'
 *
 * Given two strings s and t , write a function to determine if t is an anagram
 * of s.
 *
 * Example 1:
 *
 *
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: s = "rat", t = "car"
 * Output: false
 *
 *
 * Note:
 * You may assume the string contains only lowercase alphabets.
 *
 * Follow up:
 * What if the inputs contain unicode characters? How would you adapt your
 * solution to such case?
 *
 */
// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }
    let sObj = {};
    for (let char of s) {
        if (char in sObj) {
            sObj[char] += 1;
        }
        else {
            sObj[char] = 1;
        }
    }
    let tObj = {};
    for (let char of t) {
        if (char in tObj) {
            tObj[char] += 1;
        }
        else {
            tObj[char] = 1;
        }
    }
    for (let char in sObj) {
        if (!(char in tObj)) {
            return false;
        }
        if (sObj[char] !== tObj[char]) {
            return false;
        }
    }
    return true;
};
// @lc code=end
//# sourceMappingURL=242.valid-anagram.js.map