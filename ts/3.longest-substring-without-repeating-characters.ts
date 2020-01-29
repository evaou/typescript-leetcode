/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 *
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (29.45%)
 * Likes:    7570
 * Dislikes: 445
 * Total Accepted:    1.3M
 * Total Submissions: 4.4M
 * Testcase Example:  '"abcabcbb"'
 *
 * Given a string, find the length of the longest substring without repeating
 * characters.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: "abcabcbb"
 * Output: 3 
 * Explanation: The answer is "abc", with the length of 3. 
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 * 
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3. 
 * ⁠            Note that the answer must be a substring, "pwke" is a
 * subsequence and not a substring.
 * 
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s: string) {
    // set initial substring length as 0
    let subLen = 0;

    // set substring's start and end index as 0
    let subStart = 0;
    let subEnd = 0;

    // set initial frequency object for substring characters
    type frqType = {
        [key: string]: number;
    }
    let subFrqObj: frqType = {};

    // loop as start index is less than string length
    while (subStart < s.length) {
        // check if end index is less than string length and substring character frquency is not repeated
        if (subEnd < s.length && !subFrqObj[s.charAt(subEnd)]) {
            // extend substring by moving end index to the right
            subFrqObj[s.charAt(subEnd)] = 1;
            subEnd++;
            // update substring length
            subLen = Math.max(subLen, (subEnd - subStart));
        }
        // else check if substring character frequency is repeated
        else if (subFrqObj[s.charAt(subEnd)]) {
            // update substring length
            subLen = Math.max(subLen, (subEnd - subStart));
            // shrink substring by moving start index to the right
            subFrqObj[s.charAt(subStart)] = 0;
            subStart++;
        }
        // else 
        else {
            // leave loop
            break;
        }
    }

    // retrun substring length
    return subLen;
};
// @lc code=end
console.log(lengthOfLongestSubstring(" "));
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
/*
pwwkew, 6
subLen, subStart, subEnd, subFrqObj
0, 0, 0, {}
0, 0, 1, {'p': 1}
0, 0, 2, {'p': 1, 'w': 1}
2, 1, 2, {'p': 0, 'w': 1} 
2, 2, 2, {'p': 0, 'w': 0}
2, 2, 3, {'p': 0, 'w': 1}
2, 2, 4, {'p': 0, 'w': 1, 'k': 1}
2, 2, 5, {'p': 0, 'w': 1, 'k': 1, 'e': 1}
3, 3, 5, {'p': 0, 'w': 0, 'k': 1, 'e': 1}
3, 3, 6, {'p': 0, 'w': 1, 'k': 1, 'e': 1}
3, 'kew'
*/
