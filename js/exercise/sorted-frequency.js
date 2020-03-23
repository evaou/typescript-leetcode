"use strict";
function sortedFrequency(arr, input) {
    if (input > arr[arr.length - 1] || input < arr[0]) {
        return -1;
    }
    let startIdx;
    let endIdx;
    startIdx = binarySearchFirst(arr, 0, arr.length - 1, input);
    endIdx = binarySearchLast(arr, 0, arr.length - 1, input);
    return (endIdx - startIdx + 1);
}
function binarySearchFirst(arr, startIdx, endIdx, input) {
    let midIdx = Math.floor((startIdx + endIdx) / 2);
    if (arr[midIdx] === input) {
        if (midIdx === startIdx) {
            return midIdx;
        }
        else if (arr[midIdx - 1] !== input) {
            return midIdx;
        }
    }
    if (arr[midIdx] >= input) {
        return binarySearchFirst(arr, startIdx, midIdx - 1, input);
    }
    else {
        return binarySearchFirst(arr, midIdx + 1, endIdx, input);
    }
}
function binarySearchLast(arr, startIdx, endIdx, input) {
    let midIdx = Math.floor((startIdx + endIdx) / 2);
    if (arr[midIdx] === input) {
        if (midIdx === endIdx) {
            return midIdx;
        }
        else if (arr[midIdx + 1] !== input) {
            return midIdx;
        }
    }
    if (arr[midIdx] <= input) {
        return binarySearchLast(arr, midIdx + 1, endIdx, input);
    }
    else {
        return binarySearchLast(arr, startIdx, midIdx - 1, input);
    }
}
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)); // 4
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)); // 1 
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)); // 2 
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)); // -1
//# sourceMappingURL=sorted-frequency.js.map