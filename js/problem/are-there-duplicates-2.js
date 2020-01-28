"use strict";
function areThereDuplicates2() {
    var inputs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        inputs[_i] = arguments[_i];
    }
    var sortedInputs = inputs.sort(function (a, b) { return (a < b ? -1 : 1); });
    if (sortedInputs.length < 2) {
        return false;
    }
    // set pointers for the first two items
    var idx1 = 0;
    var idx2 = 1;
    // loop the two adjacent pointers thru sorted inputs 
    while (idx2 < sortedInputs.length) {
        // return true if values are the same
        if (sortedInputs[idx1] === sortedInputs[idx2]) {
            return true;
        }
        idx1++;
        idx2++;
    }
    // return false
    return false;
}
console.log(areThereDuplicates2(1, 2, 3)); // false
console.log(areThereDuplicates2(1, 2, 2)); // true
console.log(areThereDuplicates2('a', 'b', 'c', 'a')); // true
//# sourceMappingURL=are-there-duplicates-2.js.map