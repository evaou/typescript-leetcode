namespace dataStructure {
  class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(value: number) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  class Tree {
    root: TreeNode | null;

    constructor() {
      this.root = null;
    }

    insert(value: number) {
      let newNode = new TreeNode(value);
      if (!this.root) {
        this.root = newNode;
        return;
      }

      let currentNode = this.root;
      while (true) {
        if (value > currentNode.value) {
          if (currentNode.right) {
            currentNode = currentNode.right;
          } else {
            currentNode.right = newNode;
            return;
          }
        } else if (value < currentNode.value) {
          if (currentNode.left) {
            currentNode = currentNode.left;
          } else {
            currentNode.left = newNode;
            return;
          }
        }
      }
    }

    DFSPreOrder(): number[] {
      let visited: number[] = [];

      function traversePreOrder(node: TreeNode | null) {
        if (!node) return;

        visited.push(node.value);
        if (node.left) traversePreOrder(node.left);
        if (node.right) traversePreOrder(node.right);
      }

      traversePreOrder(this.root);

      return visited;
    }

    DFSPostOrder(): number[] {
      let visited: number[] = [];

      function traversePostOrder(node: TreeNode | null) {
        if (!node) return;

        if (node.left) traversePostOrder(node.left);
        if (node.right) traversePostOrder(node.right);
        visited.push(node.value);
      }

      traversePostOrder(this.root);

      return visited;
    }

    DFSInOrder(): number[] {
      let visited: number[] = [];

      function traverseInOrder(node: TreeNode | null) {
        if (!node) return;

        if (node.left) traverseInOrder(node.left);
        visited.push(node.value);
        if (node.right) traverseInOrder(node.right);
      }

      traverseInOrder(this.root);
      return visited;
    }
  }

  let tree = new Tree();
  console.log(tree.DFSPreOrder());
  console.log(tree.DFSPostOrder());
  console.log(tree.DFSInOrder());
  tree.insert(10);
  tree.insert(15);
  tree.insert(6);
  tree.insert(20);
  tree.insert(3);
  tree.insert(8);
  console.log(tree.DFSPreOrder()); // [10, 6, 3, 8, 15, 20]
  console.log(tree.DFSPostOrder()); // [3, 8, 6, 20, 15, 10]
  console.log(tree.DFSInOrder()); // [3, 6, 8, 10, 15, 20]
}
