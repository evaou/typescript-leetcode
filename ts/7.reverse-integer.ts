/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 *
 * https://leetcode.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (25.61%)
 * Likes:    2781
 * Dislikes: 4339
 * Total Accepted:    927.8K
 * Total Submissions: 3.6M
 * Testcase Example:  '123'
 *
 * Given a 32-bit signed integer, reverse digits of an integer.
 * 
 * Example 1:
 * 
 * 
 * Input: 123
 * Output: 321
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: -123
 * Output: -321
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: 120
 * Output: 21
 * 
 * 
 * Note:
 * Assume we are dealing with an environment which could only store integers
 * within the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the purpose
 * of this problem, assume that your function returns 0 when the reversed
 * integer overflows.
 * 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */

var reverse = function(x: number) {
    let signed = 1;
    if (x < 0) {
        signed = -1;
    }

    let value = x * signed;
    let newValue = 0;
    
    while (value > 0) {
        let digit = value % 10;
        value = (value - digit) / 10;
        
        if (newValue === 0 && digit === 0) {
            continue;
        }

        newValue = newValue * 10 + digit; 
    }

    newValue *= signed;
    
    let maxValue = 2 ** 31 - 1;
    let minValue = -1 * 2 ** 31;

    if (newValue > maxValue || newValue < minValue) {
        newValue = 0;
    }

    return newValue;
};

// @lc code=end

