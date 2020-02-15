"use strict";
function selectionSort(arr) {
    if (arr.length <= 1)
        return arr;
    for (let sortedIdx = 0; sortedIdx < arr.length; sortedIdx++) {
        let smallerIdx = sortedIdx;
        for (let tmpIdx = sortedIdx + 1; tmpIdx < arr.length; tmpIdx++) {
            if (arr[tmpIdx] < arr[smallerIdx]) {
                smallerIdx = tmpIdx;
            }
        }
        if (smallerIdx != sortedIdx) {
            let tmpValue = arr[smallerIdx];
            arr[smallerIdx] = arr[sortedIdx];
            arr[sortedIdx] = tmpValue;
        }
    }
    return arr;
}
console.log(selectionSort([34, 22, 10, 19, 17]));
//# sourceMappingURL=selection-sort.js.map