"use strict";
/*
Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

Example 1:

Input: [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
             Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Example 2:

Input: [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
             Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
             engaging multiple transactions at the same time. You must sell before buying again.
Example 3:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/
function maxProfit(prices) {
    let sells = [];
    let maxes = [];
    for (let i = 0; i < prices.length; i++) {
        sells[i] = [];
        maxes[i] = -1;
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[j] > prices[i]) {
                sells[i].push(j);
            }
        }
    }
    maxes[prices.length - 1] = 0;
    function findMaxProfit(inputIdx, prices, sells) {
        if (inputIdx > prices.length - 1) {
            return 0;
        }
        if (maxes[inputIdx] > -1) {
            return maxes[inputIdx];
        }
        let startIdx;
        let endIdx;
        let maxProfit = 0;
        let subMaxProfit;
        let tmpProfit;
        let subTmpProfit;
        for (let i = inputIdx; i < prices.length; i++) {
            startIdx = i;
            subMaxProfit = 0;
            for (let j = 0; j < sells[i].length; j++) {
                endIdx = sells[startIdx][j];
                tmpProfit = prices[endIdx] - prices[startIdx];
                subTmpProfit = findMaxProfit(endIdx + 1, prices, sells);
                if (subMaxProfit < tmpProfit + subTmpProfit) {
                    subMaxProfit = tmpProfit + subTmpProfit;
                }
            }
            if (maxProfit < subMaxProfit) {
                maxProfit = subMaxProfit;
            }
        }
        maxes[inputIdx] = maxProfit;
        return maxProfit;
    }
    let result = findMaxProfit(0, prices, sells);
    return result;
}
console.log(maxProfit([3, 2, 6, 5, 0, 3])); // 7
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 7
console.log(maxProfit([1, 2, 3, 4, 5])); // 4
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
//# sourceMappingURL=5.max-profit.js.map