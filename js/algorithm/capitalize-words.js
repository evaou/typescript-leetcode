"use strict";
function capitalizeWords(arr) {
    if (arr.length === 0)
        return arr;
    let newArr = [];
    newArr = newArr.concat(arr[0].toUpperCase());
    newArr = newArr.concat(capitalizeWords(arr.slice(1)));
    return newArr;
}
let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
//# sourceMappingURL=capitalize-words.js.map