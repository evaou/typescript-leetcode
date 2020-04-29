"use strict";
/*
Given a non-empty binary tree, find the maximum path sum.

For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.

Example 1:

Input: [1,2,3]

       1
      / \
     2   3

Output: 6
Example 2:

Input: [-10,9,20,null,null,15,7]

   -10
   / \
  9  20
    /  \
   15   7

Output: 42
*/
var leetcode;
(function (leetcode) {
    class TreeNode {
        constructor(val) {
            this.val = val;
            this.left = null;
            this.right = null;
        }
    }
    function maxPathSum(root) {
        let maxSum = -Infinity;
        maxPathDown(root);
        return maxSum;
        function maxPathDown(node) {
            if (node === null) {
                return 0;
            }
            let leftVal;
            let rightVal;
            leftVal = Math.max(0, maxPathDown(node.left));
            rightVal = Math.max(0, maxPathDown(node.right));
            maxSum = Math.max(maxSum, node.val + leftVal + rightVal);
            return Math.max(leftVal, rightVal) + node.val;
        }
    }
})(leetcode || (leetcode = {}));
//# sourceMappingURL=30.max-path-sum.js.map