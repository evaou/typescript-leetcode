"use strict";
var Problem;
(function (Problem) {
    function reverse(s) {
        if (s.length === 0)
            return "";
        let lastIdx = s.length - 1;
        return s.charAt(lastIdx) + reverse(s.substring(0, lastIdx));
    }
})(Problem || (Problem = {}));
//# sourceMappingURL=reverse.js.map