"use strict";
function merge(arr1, arr2) {
    var outArr = [];
    var idx1 = 0;
    var idx2 = 0;
    while (idx1 < arr1.length && idx2 < arr2.length) {
        if (arr1[idx1] < arr2[idx2]) {
            outArr.push(arr1[idx1++]);
        }
        else {
            outArr.push(arr2[idx2++]);
        }
    }
    while (idx1 < arr1.length) {
        outArr.push(arr1[idx1++]);
    }
    while (idx2 < arr2.length) {
        outArr.push(arr2[idx2++]);
    }
    return outArr;
}
function mergeSort(arr) {
    if (arr.length <= 1)
        return arr;
    var middleIdx = Math.floor(arr.length / 2);
    var arr1 = arr.slice(0, middleIdx);
    var arr2 = arr.slice(middleIdx);
    arr1 = mergeSort(arr1);
    arr2 = mergeSort(arr2);
    var resultArr = merge(arr1, arr2);
    return resultArr;
}
console.log(merge([1, 10, 50], [2, 14, 99, 100]));
console.log(mergeSort([1, 10, 50, 2, 14, 99, 3]));
//# sourceMappingURL=merge-sort.js.map