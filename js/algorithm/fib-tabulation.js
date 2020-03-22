"use strict";
function fibTab(input) {
    if (input <= 2) {
        return 1;
    }
    let arr = [0, 1, 1];
    for (let i = 3; i <= input; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[input];
}
console.log(fibTab(10));
//# sourceMappingURL=fib-tabulation.js.map