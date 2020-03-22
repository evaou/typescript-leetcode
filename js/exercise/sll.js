"use strict";
var exercise;
(function (exercise) {
    class Node {
        constructor(value) {
            this.val = value;
            this.next = null;
        }
    }
    class SinglyLinkedList {
        constructor() {
            this.head = null;
            this.tail = null;
            this.length = 0;
        }
        push(value) {
            let newNode = new Node(value);
            if (!this.head) {
                this.head = newNode;
                this.tail = newNode;
            }
            else {
                this.tail.next = newNode;
                this.tail = this.tail.next;
            }
            this.length++;
            return this;
        }
        pop() {
            var _a;
            if (!this.length) {
                return null;
            }
            let node = this.tail;
            let preNode = this.head;
            while ((_a = preNode) === null || _a === void 0 ? void 0 : _a.next) {
                if (preNode.next === node) {
                    break;
                }
                preNode = preNode.next;
            }
            preNode.next = null;
            this.tail = preNode;
            this.length--;
            if (!node) {
                return null;
            }
            else {
                return node;
            }
        }
        get(index) {
            if (index > this.length - 1) {
                return null;
            }
            let currentIndex = 0;
            let currentNode = this.head;
            while (index !== currentIndex) {
                currentNode = currentNode.next;
                currentIndex++;
            }
            return currentNode;
        }
        insert(index, value) {
            if (index < 0 || index > this.length) {
                return false;
            }
            let newNode = new Node(value);
            if (!this.length) {
                this.head = newNode;
                this.tail = newNode;
            }
            else if (index === this.length) {
                this.tail.next = newNode;
                this.tail = newNode;
            }
            else {
                let currentIndex = 0;
                let currentNode = this.head;
                while (currentIndex + 1 !== index) {
                    currentNode = currentNode.next;
                    currentIndex++;
                }
                newNode.next = currentNode.next;
                currentNode.next = newNode;
            }
            this.length++;
            return true;
        }
        rotate(num) {
            let count = 0;
            let tmpNode;
            if (num >= 0) {
                while (count < num) {
                    tmpNode = this.head;
                    this.head = this.head.next;
                    this.push(tmpNode.val);
                    count++;
                }
            }
            else {
                num = -num;
                while (count < num) {
                    tmpNode = this.pop();
                    tmpNode.next = this.head;
                    this.head = tmpNode;
                    count++;
                }
            }
        }
        set(index, value) {
            if (index < 0 || index >= this.length) {
                return false;
            }
            let currentIndex = 0;
            let currentNode = this.head;
            while (index !== currentIndex) {
                currentNode = currentNode.next;
                currentIndex++;
            }
            currentNode.val = value;
            return true;
        }
    }
    let sll = new SinglyLinkedList();
    sll
        .push(5)
        .push(10)
        .push(15)
        .push(20);
    console.log(sll.insert(2, 12));
    console.log(sll.insert(100, 12));
    console.log(sll.insert(5, 25));
    console.log("");
})(exercise || (exercise = {}));
//# sourceMappingURL=sll.js.map