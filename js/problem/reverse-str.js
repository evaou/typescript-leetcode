"use strict";
function reverseStr(s) {
    if (s.length === 0)
        return "";
    var lastIdx = s.length - 1;
    return (s.charAt(lastIdx) + reverseStr(s.substring(0, lastIdx)));
}
//# sourceMappingURL=reverse-str.js.map