"use strict";
var dataStructure;
(function (dataStructure) {
    class Node {
        constructor(value) {
            this.value = value;
            this.left = null;
            this.right = null;
        }
    }
    class BinarySearchTree {
        constructor() {
            this.root = null;
        }
        insert(value) {
            let newNode = new Node(value);
            if (!this.root) {
                this.root = newNode;
                return this;
            }
            let checkNode = this.root;
            while (true) {
                if (value === checkNode.value)
                    return null;
                if (value > checkNode.value) {
                    if (!checkNode.right) {
                        checkNode.right = newNode;
                        return this;
                    }
                    checkNode = checkNode.right;
                }
                else {
                    if (!checkNode.left) {
                        checkNode.left = newNode;
                        return this;
                    }
                    checkNode = checkNode.left;
                }
            }
        }
        find(value) {
            if (!this.root)
                return null;
            let checkNode = this.root;
            let isFound = false;
            while (checkNode && !isFound) {
                if (value > checkNode.value) {
                    checkNode = checkNode.right;
                }
                else if (value < checkNode.value) {
                    checkNode = checkNode.left;
                }
                else {
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
})(dataStructure || (dataStructure = {}));
//# sourceMappingURL=binary-search-tree.js.map