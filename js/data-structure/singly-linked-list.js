"use strict";
var dataStructure;
(function (dataStructure) {
    class Node {
        constructor(value) {
            this.value = value;
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
                this.tail = newNode;
            }
            this.length++;
            return this.head;
        }
        traverse() {
            let curNode = this.head;
            while (curNode) {
                console.log(curNode.value);
                curNode = curNode.next;
            }
        }
        pop() {
            if (!this.head) {
                return null;
            }
            let current = this.head;
            let newTail = current;
            while (current && current.next) {
                newTail = current;
                current = current.next;
            }
            newTail.next = null;
            this.length--;
            if (this.length === 0) {
                this.head = null;
                this.tail = null;
            }
            return current;
        }
        shift() {
            if (!this.head)
                return null;
            let currentHead = this.head;
            this.head = this.head.next;
            currentHead.next = null;
            this.length--;
            if (this.length === 0) {
                this.tail = null;
            }
            return currentHead;
        }
        unshift(val) {
            let node = new Node(val);
            if (!this.head) {
                this.head = node;
                this.tail = node;
            }
            else {
                node.next = this.head;
                this.head = node;
            }
            this.length++;
            return this.head;
        }
        get(index) {
            if (this.length === 0) {
                return null;
            }
            if (index < 0 || index > this.length - 1) {
                return null;
            }
            let counter = 0;
            let curPointer = this.head;
            while (counter < this.length) {
                if (counter === index) {
                    break;
                }
                curPointer = curPointer.next;
                counter++;
            }
            return curPointer;
        }
        set(index, value) {
            let node = this.get(index);
            if (!node) {
                return false;
            }
            node.value = value;
            return true;
        }
        insert(index, value) {
            if (index < 0 || index > this.length)
                return false;
            if (index === 0)
                return !!this.unshift(value);
            if (index === this.length)
                return !!this.push(value);
            let newNode = new Node(value);
            let preNode = this.get(index - 1);
            newNode.next = preNode.next;
            preNode.next = newNode;
            this.length++;
            return true;
        }
        remove(index) {
            if (index < 0 || index > this.length - 1)
                return false;
            if (index === 0)
                return !!this.shift();
            if (index === this.length - 1)
                return !!this.pop();
            let preNode = this.get(index - 1);
            preNode.next = preNode.next.next;
            return true;
        }
        reverse() {
            if (this.length < 2)
                return;
            let tmpNode = this.head;
            this.head = this.tail;
            this.tail = tmpNode;
            let preNode = null;
            let curNode = this.tail;
            let nextNode;
            while (curNode != null) {
                nextNode = curNode.next;
                curNode.next = preNode;
                preNode = curNode;
                curNode = nextNode;
            }
        }
    }
    let list = new SinglyLinkedList();
    list.push("Hello");
    list.push("Goodbye");
    list.push(99);
    list.traverse();
    list.reverse();
})(dataStructure || (dataStructure = {}));
//# sourceMappingURL=singly-linked-list.js.map