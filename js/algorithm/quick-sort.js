"use strict";
function swap(arr, i, j) {
    let tmpValue = arr[i];
    arr[i] = arr[j];
    arr[j] = tmpValue;
}
function pivot(arr, startIdx, endIdx, targetIdx = startIdx) {
    let initialPivotIdx = targetIdx;
    let pivotIdx = startIdx;
    let pivotValue = arr[initialPivotIdx];
    for (let i = startIdx; i <= endIdx; i++) {
        if (pivotValue > arr[i]) {
            swap(arr, pivotIdx, i);
            pivotIdx++;
        }
    }
    if (arr[pivotIdx] !== pivotValue) {
        swap(arr, initialPivotIdx, pivotIdx);
    }
    return pivotIdx;
}
function quickSort(arr, startIdx = 0, endIdx = arr.length - 1) {
    if (startIdx < endIdx) {
        let pivotIdx = pivot(arr, startIdx, endIdx);
        quickSort(arr, startIdx, pivotIdx - 1);
        quickSort(arr, pivotIdx + 1, endIdx);
    }
    return arr;
}
console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));
//# sourceMappingURL=quick-sort.js.map