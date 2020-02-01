"use strict";
function someRecursive(arr, func) {
    if (arr.length === 0)
        return false;
    if (func(arr[0]))
        return true;
    return someRecursive(arr.slice(1), func);
}
var isOdd = function (val) { return val % 2 !== 0; };
console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], function (val) { return val > 10; })); // false
//# sourceMappingURL=some-recursive.js.map