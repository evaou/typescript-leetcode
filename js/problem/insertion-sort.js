"use strict";
function insertionSort(arr) {
    if (arr.length < 2)
        return arr;
    for (var i = 1; i < arr.length; i++) {
        var insertedValue = arr[i];
        var j = i;
        while (j > 0 && insertedValue < arr[j - 1]) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = insertedValue;
    }
    return arr;
}
console.log(insertionSort([34, 22, 10, 19, 17]));
//# sourceMappingURL=insertion-sort.js.map