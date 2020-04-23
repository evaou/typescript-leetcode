"use strict";
/*
Return the root node of a binary search tree that matches the given preorder traversal.

(Recall that a binary search tree is a binary tree where for every node, any descendant of node.left has a value < node.val, and any descendant of node.right has a value > node.val.  Also recall that a preorder traversal displays the value of the node first, then traverses node.left, then traverses node.right.)

Example 1:

Input: [8,5,1,7,10,12]
Output: [8,5,10,1,7,null,12]

Note:

1 <= preorder.length <= 100
The values of preorder are distinct.
*/
var leetCode;
(function (leetCode) {
    class TreeNode {
        constructor(val) {
            this.val = val;
            this.left = null;
            this.right = null;
        }
    }
    function bstFromPreorder(preorder) {
        let startIdx = 0;
        let root;
        root = buildBst(preorder, Infinity);
        function buildBst(preorder, rootValue) {
            if (startIdx >= preorder.length || preorder[startIdx] > rootValue) {
                return null;
            }
            let newRoot = new TreeNode(preorder[startIdx++]);
            newRoot.left = buildBst(preorder, newRoot.val);
            newRoot.right = buildBst(preorder, rootValue);
            return newRoot;
        }
        return root;
    }
    let preorder = [1, 3, 2];
    console.log(bstFromPreorder(preorder)); // [1, null, 3, 2]
    preorder = [8, 5, 1, 7, 10, 12];
    console.log(bstFromPreorder(preorder)); // [8,5,10,1,7,null,12]
})(leetCode || (leetCode = {}));
//# sourceMappingURL=20.bst-from-preorder.js.map