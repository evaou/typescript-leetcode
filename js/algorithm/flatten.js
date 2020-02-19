"use strict";
function flatten(arr) {
    if (arr.length === 0)
        return arr;
    let newArr = [];
    for (let item of arr) {
        if (Array.isArray(item)) {
            let tmpArr = flatten(item);
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