"use strict";
function capitalizeFirst(arr) {
    if (arr.length === 0)
        return arr;
    let newArr = [];
    let newStr = arr[0].toLowerCase();
    newStr = newStr.charAt(0).toUpperCase() + newStr.slice(1);
    newArr.push(newStr);
    let tmpArr = capitalizeFirst(arr.slice(1));
    newArr = newArr.concat(tmpArr);
    return newArr;
}
console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']
//# sourceMappingURL=capitalize-first.js.map