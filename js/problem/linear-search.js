"use strict";
function linearSearch(arr, target) {
    for (var index in arr) {
        if (arr[index] === target)
            return +index;
    }
    return -1;
}
console.log(linearSearch([100], 200)); // -1
console.log(linearSearch([6, 5, 4, 3, 2, 1], 4)); // 2
//# sourceMappingURL=linear-search.js.map