"use strict";
function recursiveRange(n) {
    if (n === 0)
        return 0;
    return (n + recursiveRange(n - 1));
}
//# sourceMappingURL=recursive-range.js.map