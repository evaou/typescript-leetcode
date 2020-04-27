"use strict";
/*
Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

Example:

Input:

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

Output: 4
*/
function maximalSquare(matrix) {
    let rowLen = matrix.length;
    let colLen = rowLen > 0 ? matrix[0].length : 0;
    let dp = Array(colLen + 1).fill(0);
    let maxLen = 0;
    let prev = 0;
    let temp;
    for (let i = 1; i <= rowLen; i++) {
        for (let j = 1; j <= colLen; j++) {
            temp = dp[j];
            if (matrix[i - 1][j - 1] === "1") {
                dp[j] = Math.min(dp[j], dp[j - 1], prev) + 1;
                maxLen = Math.max(maxLen, dp[j]);
            }
            else {
                dp[j] = 0;
            }
            prev = temp;
        }
    }
    return maxLen * maxLen;
}
let matrix = [
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"],
];
console.log(maximalSquare(matrix)); // 4
matrix = [["1"]];
console.log(maximalSquare(matrix)); // 1
matrix = [["1", "0"]];
console.log(maximalSquare(matrix)); // 1
//# sourceMappingURL=27.maximal-square.js.map