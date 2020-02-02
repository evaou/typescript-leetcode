"use strict";
function collectStrings(obj) {
    if (Object.keys(obj).length === 0)
        return [];
    var result = [];
    for (var key in obj) {
        var value = obj[key];
        if (typeof value === 'object') {
            result = result.concat(collectStrings(value));
        }
        else if (typeof value === 'string') {
            result.push(value);
        }
    }
    return result;
}
var inputObj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
};
console.log(collectStrings(inputObj)); // ["foo", "bar", "baz"])
//# sourceMappingURL=collect-strings.js.map