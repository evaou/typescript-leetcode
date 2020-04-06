"use strict";
/*
Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.
*/
function groupAnagrams(strs) {
    let result = [];
    let objs = {};
    let charArr;
    let index;
    let aCode = "a".charCodeAt(0);
    let key;
    for (let str of strs) {
        charArr = Array(26).fill(0);
        for (let i = 0; i < str.length; i++) {
            index = str.charCodeAt(i) - aCode;
            charArr[index]++;
        }
        key = charArr.toString();
        if (key in objs) {
            objs[key].push(str);
        }
        else {
            objs[key] = [str];
        }
    }
    for (key in objs) {
        result.push(objs[key]);
    }
    return result;
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
//# sourceMappingURL=6.group-anagrams.js.map