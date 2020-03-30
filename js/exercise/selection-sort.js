"use strict";
var exercise;
(function (exercise) {
    function selectionSort(arr, func = compareNum) {
        let minIdx;
        let tmpVal;
        for (let i = 0; i < arr.length - 1; i++) {
            minIdx = i;
            for (let j = i + 1; j < arr.length; j++) {
                if (func(arr[minIdx], arr[j]) > 0) {
                    minIdx = j;
                }
            }
            if (i !== minIdx) {
                tmpVal = arr[i];
                arr[i] = arr[minIdx];
                arr[minIdx] = tmpVal;
            }
        }
        return arr;
    }
    function compareNum(num1, num2) {
        let result = num1 - num2;
        if (result === 0) {
            return 0;
        }
        else if (result > 0) {
            return 1;
        }
        else {
            return -1;
        }
    }
    console.log(selectionSort([4, 20, 12, 10, 7, 9]));
})(exercise || (exercise = {}));
//# sourceMappingURL=selection-sort.js.map