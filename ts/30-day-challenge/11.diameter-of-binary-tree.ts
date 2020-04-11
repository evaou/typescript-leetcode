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

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  addLeftNode(val: number) {
    let newNode = new TreeNode(val);
    this.left = newNode;
  }

  addRightNode(val: number) {
    let newNode = new TreeNode(val);
    this.right = newNode;
  }
}

function diameterOfBinaryTree(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  function maxLength(node: TreeNode): number {
    if (node.left === null && node.right === null) {
      return 0;
    }

    let leftLength: number = 0;
    let rightLength: number = 0;
    let totalLength: number;

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

  let maxDiameter: number = 0;
  maxLength(root);

  return maxDiameter;
}

let root = new TreeNode(1);
root.addLeftNode(2);
root.addRightNode(3);
root.left?.addLeftNode(4);
root.left?.addRightNode(5);

console.log(diameterOfBinaryTree(root));

console.log(diameterOfBinaryTree(null));
