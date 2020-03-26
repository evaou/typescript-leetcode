"use strict";
var exercise;
(function (exercise) {
    function bubbleSort(arr, fun = compareNum) {
        let checkIdx;
        let tmpVal;
        for (let stopIdx = arr.length - 1; stopIdx > 0; stopIdx--) {
            checkIdx = 0;
            while (checkIdx < stopIdx) {
                if (fun(arr[checkIdx], arr[checkIdx + 1]) >= 1) {
                    tmpVal = arr[checkIdx];
                    arr[checkIdx] = arr[checkIdx + 1];
                    arr[checkIdx + 1] = tmpVal;
                }
                checkIdx++;
            }
        }
        return arr;
    }
    function compareNum(num1, num2) {
        let result;
        if (num1 === num2) {
            result = 0;
        }
        else if (num1 < num2) {
            result = -1;
        }
        else {
            result = 1;
        }
        return result;
    }
    console.log(bubbleSort([4, 20, 12, 10, 7, 9]));
})(exercise || (exercise = {}));
//# sourceMappingURL=bubble-sort.js.map