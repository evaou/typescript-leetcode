"use strict";
var dataStructure;
(function (dataStructure) {
    class Node {
        constructor(value) {
            this.value = value;
            this.next = null;
        }
    }
    class Stack {
        constructor() {
            this.first = null;
            this.last = null;
            this.size = 0;
        }
        push(value) {
            let newNode = new Node(value);
            if (!this.first) {
                this.first = newNode;
                this.last = newNode;
            }
            else {
                let tempNode = this.first;
                this.first = newNode;
                this.first.next = tempNode;
            }
            return ++this.size;
        }
        pop() {
            if (!this.first)
                return null;
            let tempNode = this.first;
            if (this.first === this.last) {
                this.last = null;
            }
            this.first = this.first.next;
            this.size--;
            return tempNode.value;
        }
    }
})(dataStructure || (dataStructure = {}));
//# sourceMappingURL=stack.js.map