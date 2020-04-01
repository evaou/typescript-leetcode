"use strict";
var exercise;
(function (exercise) {
    var _a, _b, _c, _d, _e, _f, _g;
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
        remove(index) {
            let curNode;
            let preNode = null;
            let curIdx = 0;
            if (this.length === 0 || index < 0 || index >= this.length) {
                return undefined;
            }
            curNode = this.head;
            while (curIdx < this.length && curNode) {
                if (curIdx === index) {
                    break;
                }
                curIdx++;
                preNode = curNode;
                curNode = curNode.next;
            }
            if (preNode) {
                preNode.next = curNode.next;
            }
            else {
                this.head = curNode.next;
            }
            curNode.next = null;
            this.length--;
            return curNode;
        }
    }
    let sll = new SinglyLinkedList();
    sll
        .push(5)
        .push(10)
        .push(15)
        .push(20);
    console.log((_a = sll.remove(2)) === null || _a === void 0 ? void 0 : _a.val);
    console.log(sll.remove(100));
    console.log(sll.length);
    console.log((_b = sll.head) === null || _b === void 0 ? void 0 : _b.val);
    console.log((_d = (_c = sll.head) === null || _c === void 0 ? void 0 : _c.next) === null || _d === void 0 ? void 0 : _d.val);
    console.log((_g = (_f = (_e = sll.head) === null || _e === void 0 ? void 0 : _e.next) === null || _f === void 0 ? void 0 : _f.next) === null || _g === void 0 ? void 0 : _g.val);
})(exercise || (exercise = {}));
//# sourceMappingURL=singly-linked-list.js.map