"use strict";
var dataStructure;
(function (dataStructure) {
    class TreeNode {
        constructor(value) {
            this.value = value;
            this.left = null;
            this.right = null;
        }
    }
    class Tree {
        constructor() {
            this.root = null;
        }
        insert(value) {
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
                    }
                    else {
                        currentNode.right = newNode;
                        return;
                    }
                }
                else if (value < currentNode.value) {
                    if (currentNode.left) {
                        currentNode = currentNode.left;
                    }
                    else {
                        currentNode.left = newNode;
                        return;
                    }
                }
            }
        }
        BFS() {
            let visited = [];
            if (!this.root)
                return visited;
            let queue = [];
            let node = this.root;
            queue.push(node);
            while (queue.length) {
                node = queue.shift();
                visited.push(node.value);
                if (node.left)
                    queue.push(node.left);
                if (node.right)
                    queue.push(node.right);
            }
            return visited;
        }
    }
    let tree = new Tree();
    console.log(tree.BFS());
    tree.insert(10);
    tree.insert(15);
    tree.insert(6);
    tree.insert(20);
    tree.insert(3);
    tree.insert(8);
    console.log(tree.BFS());
})(dataStructure || (dataStructure = {}));
//# sourceMappingURL=breadth-first-search.js.map