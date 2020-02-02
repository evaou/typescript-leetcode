"use strict";
function flatten(arr) {
    if (arr.length === 0)
        return arr;
    var newArr = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        if (Array.isArray(item)) {
            var tmpArr = flatten(item);
            newArr = newArr.concat(tmpArr);
        }
        else {
            newArr.push(item);
        }
    }
    return newArr;
}
console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3
//# sourceMappingURL=flatten.js.map