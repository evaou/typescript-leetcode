"use strict";
function swap(arr, i, j) {
    var tmpValue = arr[i];
    arr[i] = arr[j];
    arr[j] = tmpValue;
}
function pivot(arr, startIdx, endIdx, targetIdx) {
    if (targetIdx === void 0) { targetIdx = startIdx; }
    var initialPivotIdx = targetIdx;
    var pivotIdx = startIdx;
    var pivotValue = arr[initialPivotIdx];
    for (var i = startIdx; i <= endIdx; i++) {
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
function quickSort(arr, startIdx, endIdx) {
    if (startIdx === void 0) { startIdx = 0; }
    if (endIdx === void 0) { endIdx = arr.length - 1; }
    if (startIdx < endIdx) {
        var pivotIdx = pivot(arr, startIdx, endIdx);
        quickSort(arr, startIdx, pivotIdx - 1);
        quickSort(arr, pivotIdx + 1, endIdx);
    }
    return arr;
}
console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));
//# sourceMappingURL=quick-sort.js.map