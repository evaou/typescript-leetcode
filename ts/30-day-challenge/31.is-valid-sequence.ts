/*
Given a binary tree where each path going from the root to any leaf form a valid sequence, check if a given string is a valid sequence in such binary tree. 

We get the given string from the concatenation of an array of integers arr and the concatenation of all values of the nodes along a path results in a sequence in the given binary tree.
*/

namespace leetcode {
  class TreeNode {
    val: number;
    left: null | TreeNode;
    right: null | TreeNode;

    constructor(val: number) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

  class BSTTree {
    root: null | TreeNode;

    constructor(arr: (null | number)[]) {
      let newNode: null | TreeNode;
      this.root = null;
      let curNodeIdx: number = 0;
      let curNodeArr: TreeNode[] = [];
      let isLeftChecked: boolean = false;

      for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== null) {
          newNode = new TreeNode(arr[i]!);
        } else {
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
        } else {
          curNodeArr[curNodeIdx].right = newNode;
          isLeftChecked = false;
          curNodeIdx++;
        }
      }
    }
  }

  function isValidSequence(root: TreeNode, arr: number[]): boolean {
    let isValid: boolean = false;

    checkValid(root, 0);

    return isValid;

    function checkValid(curNode: null | TreeNode, curIdx: number) {
      if (!curNode || curIdx === arr.length) {
        return;
      }

      if (arr[curIdx] !== curNode.val) {
        return;
      } else {
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

  console.log(isValidSequence(tree.root!, arr)); // true

  bstNode = [0, 1, 0, 0, 1, 0, null, null, 1, 0, 0];
  arr = [0, 0, 1];
  tree = new BSTTree(bstNode);
  console.log(isValidSequence(tree.root!, arr)); // false

  bstNode = [0, 1, 0, 0, 1, 0, null, null, 1, 0, 0];
  arr = [0, 1, 1];
  tree = new BSTTree(bstNode);
  console.log(isValidSequence(tree.root!, arr)); // false

  bstNode = [8, 3, null, 2, 1, 5, 4];
  arr = [8];
  tree = new BSTTree(bstNode);
  console.log(isValidSequence(tree.root!, arr)); // false
}
