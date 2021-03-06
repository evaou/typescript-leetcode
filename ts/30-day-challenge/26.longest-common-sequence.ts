/*
Given two strings text1 and text2, return the length of their longest common subsequence.

A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.

If there is no common subsequence, return 0.

Example 1:

Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.

Example 2:

Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.

Example 3:

Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.
 
Constraints:

1 <= text1.length <= 1000
1 <= text2.length <= 1000
The input strings consist of lowercase English characters only.
*/

function longestCommonSequence(text1: string, text2: string): number {
  let mem: number[] = Array(text2.length + 1).fill(0);
  let prev: number = 0;
  let temp: number;

  for (let i = 1; i <= text1.length; i++) {
    prev = 0;
    for (let j = 1; j <= text2.length; j++) {
      temp = mem[j];

      if (text1[i - 1] === text2[j - 1]) {
        mem[j] = prev + 1;
      } else {
        mem[j] = Math.max(mem[j], mem[j - 1]);
      }

      prev = temp;
    }
  }

  return mem[text2.length];
}

console.log(longestCommonSequence("pmjghexybyrgzczy", "hafcdqbgncrcbihkd")); // 4
console.log(longestCommonSequence("abcde", "ace")); // 3
console.log(longestCommonSequence("abc", "abc")); // 3
console.log(longestCommonSequence("abc", "def")); // 0
