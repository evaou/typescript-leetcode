"use strict";
/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 *
 * https://leetcode.com/problems/valid-palindrome/description/
 *
 * algorithms
 * Easy (33.74%)
 * Likes:    876
 * Dislikes: 2431
 * Total Accepted:    476.9K
 * Total Submissions: 1.4M
 * Testcase Example:  '"A man, a plan, a canal: Panama"'
 *
 * Given a string, determine if it is a palindrome, considering only
 * alphanumeric characters and ignoring cases.
 *
 * Note: For the purpose of this problem, we define empty string as valid
 * palindrome.
 *
 * Example 1:
 *
 *
 * Input: "A man, a plan, a canal: Panama"
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: "race a car"
 * Output: false
 *
 *
 */
// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    if (s.length <= 1)
        return true;
    let firstIdx = 0;
    while (!s[firstIdx].match(/[a-zA-Z0-9]/) && firstIdx < s.length - 1) {
        firstIdx++;
    }
    let lastIdx = s.length - 1;
    while (!s[lastIdx].match(/[a-zA-Z0-9]/) && lastIdx > firstIdx) {
        lastIdx--;
    }
    if (s[firstIdx].toLowerCase() !== s[lastIdx].toLowerCase()) {
        return false;
    }
    else {
        return isPalindrome(s.substring(firstIdx + 1, lastIdx));
    }
};
// @lc code=end
//# sourceMappingURL=125.valid-palindrome.js.map