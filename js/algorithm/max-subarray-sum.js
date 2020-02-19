"use strict";
function maxSubarraySum(arr, size) {
    // return null if array length is less than size
    if (arr.length < size) {
        return null;
    }
    // set initial begin and end index with distance of size
    let beginIdx = 0;
    let endIdx = size - 1;
    // set current sum as 0
    let curSum = 0;
    let tmpSum = 0;
    // ensure end index is less than array length
    while (endIdx < arr.length) {
        // calculate tmp sum
        if (beginIdx === 0) {
            for (let i = beginIdx; i <= endIdx; i++) {
                tmpSum += arr[i];
            }
        }
        else {
            tmpSum = tmpSum + arr[endIdx] - arr[beginIdx - 1];
        }
        // if tmp sum is larger than current sum
        if (tmpSum > curSum) {
            // set current sum as tmp sum
            curSum = tmpSum;
        }
        // move begin and end index forward
        endIdx++;
        beginIdx++;
    }
    // return current sum 
    return curSum;
}
console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
//# sourceMappingURL=max-subarray-sum.js.map