"use strict";
/*
Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

Example:

Given a binary tree
          1
         / \
        2   3
       / \
      4   5

Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].
*/
var _a, _b;
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
    addLeftNode(val) {
        let newNode = new TreeNode(val);
        this.left = newNode;
    }
    addRightNode(val) {
        let newNode = new TreeNode(val);
        this.right = newNode;
    }
}
function diameterOfBinaryTree(root) {
    if (root === null) {
        return 0;
    }
    function maxLength(node) {
        if (node.left === null && node.right === null) {
            return 0;
        }
        let leftLength = 0;
        let rightLength = 0;
        let totalLength;
        if (node.left) {
            leftLength += 1 + maxLength(node.left);
        }
        if (node.right) {
            rightLength += 1 + maxLength(node.right);
        }
        totalLength = leftLength + rightLength;
        if (totalLength > maxDiameter) {
            maxDiameter = totalLength;
        }
        return Math.max(leftLength, rightLength);
    }
    let maxDiameter = 0;
    maxLength(root);
    return maxDiameter;
}
let root = new TreeNode(1);
root.addLeftNode(2);
root.addRightNode(3);
(_a = root.left) === null || _a === void 0 ? void 0 : _a.addLeftNode(4);
(_b = root.left) === null || _b === void 0 ? void 0 : _b.addRightNode(5);
console.log(diameterOfBinaryTree(root));
console.log(diameterOfBinaryTree(null));
//# sourceMappingURL=11.diameter-of-binary-tree.js.map