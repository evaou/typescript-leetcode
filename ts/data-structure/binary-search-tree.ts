namespace dataStructure {
  class Node {
    value: number;
    left: Node | null;
    right: Node | null;
    constructor(value: number) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  class BinarySearchTree {
    root: Node | null;
    constructor() {
      this.root = null;
    }

    insert(value: number): BinarySearchTree | null {
      let newNode = new Node(value);

      if (!this.root) {
        this.root = newNode;
        return this;
      }

      let checkNode: Node = this.root;
      while (true) {
        if (value === checkNode.value) return null;
        if (value > checkNode.value) {
          if (!checkNode.right) {
            checkNode.right = newNode;
            return this;
          }
          checkNode = checkNode.right;
        } else {
          if (!checkNode.left) {
            checkNode.left = newNode;
            return this;
          }
          checkNode = checkNode.left;
        }
      }
    }

    find(value: number): Node | null {
      if (!this.root) return null;

      let checkNode: Node | null = this.root;
      let isFound = false;

      while (checkNode && !isFound) {
        if (value > checkNode.value) {
          checkNode = checkNode.right;
        } else if (value < checkNode.value) {
          checkNode = checkNode.left;
        } else {
          isFound = true;
        }
      }

      return checkNode;
    }
  }

  let tree = new BinarySearchTree();
  tree.insert(3);
  tree.insert(5);
  tree.insert(1);
  tree.insert(2);
  let node = tree.find(2);
  node = tree.find(6);
}
