"use strict";
function areThereDuplicates() {
    var inputs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        inputs[_i] = arguments[_i];
    }
    var frqObj = {};
    for (var _a = 0, inputs_1 = inputs; _a < inputs_1.length; _a++) {
        var chr = inputs_1[_a];
        if (chr in frqObj) {
            frqObj[chr] += 1;
        }
        else {
            frqObj[chr] = 1;
        }
    }
    // loop thru frequency object to see if any value is > 1
    for (var chr in frqObj) {
        if (frqObj[chr] > 1) {
            return true;
        }
    }
    // cannot find duplicate items
    return false;
}
console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true
//# sourceMappingURL=are-there-duplicates.js.map