"use strict";
/*
Given a binary tree where each path going from the root to any leaf form a valid sequence, check if a given string is a valid sequence in such binary tree.

We get the given string from the concatenation of an array of integers arr and the concatenation of all values of the nodes along a path results in a sequence in the given binary tree.
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
    class BSTTree {
        constructor(arr) {
            let newNode;
            this.root = null;
            let curNodeIdx = 0;
            let curNodeArr = [];
            let isLeftChecked = false;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] !== null) {
                    newNode = new TreeNode(arr[i]);
                }
                else {
                    newNode = null;
                }
                if (newNode) {
                    curNodeArr.push(newNode);
                }
                if (this.root === null) {
                    this.root = newNode;
                    continue;
                }
                if (!isLeftChecked) {
                    curNodeArr[curNodeIdx].left = newNode;
                    isLeftChecked = true;
                }
                else {
                    curNodeArr[curNodeIdx].right = newNode;
                    isLeftChecked = false;
                    curNodeIdx++;
                }
            }
        }
    }
    function isValidSequence(root, arr) {
        let isValid = false;
        checkValid(root, 0);
        return isValid;
        function checkValid(curNode, curIdx) {
            if (!curNode || curIdx === arr.length) {
                return;
            }
            if (arr[curIdx] !== curNode.val) {
                return;
            }
            else {
                curIdx++;
                if (!curNode.left && !curNode.right && curIdx === arr.length) {
                    isValid = true;
                    return;
                }
                checkValid(curNode.left, curIdx);
                checkValid(curNode.right, curIdx);
            }
        }
    }
    let bstNode = [0, 1, 0, 0, 1, 0, null, null, 1, 0, 0];
    let arr = [0, 1, 0, 1];
    let tree = new BSTTree(bstNode);
    console.log(isValidSequence(tree.root, arr)); // true
    bstNode = [0, 1, 0, 0, 1, 0, null, null, 1, 0, 0];
    arr = [0, 0, 1];
    tree = new BSTTree(bstNode);
    console.log(isValidSequence(tree.root, arr)); // false
    bstNode = [0, 1, 0, 0, 1, 0, null, null, 1, 0, 0];
    arr = [0, 1, 1];
    tree = new BSTTree(bstNode);
    console.log(isValidSequence(tree.root, arr)); // false
    bstNode = [8, 3, null, 2, 1, 5, 4];
    arr = [8];
    tree = new BSTTree(bstNode);
    console.log(isValidSequence(tree.root, arr)); // false
})(leetcode || (leetcode = {}));
//# sourceMappingURL=31.is-valid-sequence.js.map