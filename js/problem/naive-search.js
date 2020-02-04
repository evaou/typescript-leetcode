"use strict";
function naiveSearch(longStr, shortStr) {
    var count = 0;
    var isMatched = false;
    for (var i = 0; i <= longStr.length - shortStr.length; i++) {
        isMatched = true;
        for (var j = 0; j < shortStr.length; j++) {
            if (longStr[i + j] !== shortStr[j]) {
                isMatched = false;
                break;
            }
        }
        if (isMatched)
            count++;
    }
    return count;
}
console.log(naiveSearch("lorie loled", "lo"));
//# sourceMappingURL=naive-search.js.map