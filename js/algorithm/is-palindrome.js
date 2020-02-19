"use strict";
var Problem;
(function (Problem) {
    function isPalindrome(s) {
        if (s.length <= 1)
            return true;
        if (s[0] !== s[s.length - 1]) {
            return false;
        }
        else {
            return isPalindrome(s.substring(1, s.length - 1));
        }
    }
})(Problem || (Problem = {}));
//# sourceMappingURL=is-palindrome.js.map