"use strict";
function sameFrequency(num1, num2) {
    var str1 = num1.toString();
    var str2 = num2.toString();
    // return false if number length is different
    if (str1.length !== str2.length) {
        return false;
    }
    var frqObj = {};
    // loop each digit in the first number
    for (var idx = 0; idx < str1.length; idx++) {
        // if digit exists in object, add 1
        var chr = str1.charAt(idx);
        if (chr in frqObj) {
            frqObj[chr] += 1;
        }
        else {
            // else, init the digit with 1 value in object
            frqObj[chr] = 1;
        }
    }
    // loop each digit in the second number
    for (var idx = 0; idx < str2.length; idx++) {
        var chr = str2.charAt(idx);
        // if digit exisits in object
        if (chr in frqObj) {
            // if value > 0, minus 1
            if (frqObj[chr] > 0) {
                frqObj[chr] -= 1;
            }
            else {
                // else, return false
                return false;
            }
        }
        else {
            // else, return false   
            return false;
        }
    }
    // return true
    return true;
}
console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
//# sourceMappingURL=same-frequency.js.map