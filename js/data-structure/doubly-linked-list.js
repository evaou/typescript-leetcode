"use strict";
var dataStructure;
(function (dataStructure) {
    class Node {
        constructor(val) {
            this.val = val;
            this.next = null;
            this.prev = null;
        }
    }
    class DoublyLinkedList {
        constructor() {
            this.head = null;
            this.tail = null;
            this.length = 0;
        }
        push(val) {
            let node = new Node(val);
            if (this.length === 0) {
                this.head = node;
                this.tail = node;
            }
            else {
                this.tail.next = node;
                node.prev = this.tail;
                this.tail = node;
            }
            this.length++;
            return this;
        }
        pop() {
            if (!this.head)
                return null;
            let result = this.tail;
            if (this.length === 1) {
                this.head = null;
                this.tail = null;
            }
            else {
                this.tail = this.tail.prev;
                this.tail.next = null;
            }
            this.length--;
            result.prev = null;
            return result;
        }
        shift() {
            if (!this.head)
                return null;
            let result = this.head;
            if (this.length === 1) {
                this.head = null;
                this.tail = null;
            }
            else {
                this.head = this.head.next;
                this.head.prev = null;
                result.next = null;
            }
            this.length--;
            return result;
        }
        unshift(val) {
            let newNode = new Node(val);
            if (!this.head) {
                this.head = newNode;
                this.tail = newNode;
            }
            else {
                newNode.next = this.head;
                this.head.prev = newNode;
                this.head = newNode;
            }
            this.length++;
        }
        get(index) {
            if (index < 0 || index >= this.length)
                return null;
            let halfIndex = Math.floor(this.length / 2);
            let count;
            let node;
            if (index <= halfIndex && this.head) {
                count = 0;
                node = this.head;
                while (count !== index) {
                    node = node.next;
                    count++;
                }
            }
            else {
                count = this.length - 1;
                node = this.tail;
                while (count !== index) {
                    node = node.prev;
                    count--;
                }
            }
            return node;
        }
        set(index, val) {
            let node = this.get(index);
            if (!node)
                return false;
            node.val = val;
            return true;
        }
        insert(index, val) {
            if (index < 0 || index > this.length)
                return false;
            if (index === 0) {
                this.unshift(val);
            }
            else if (index === this.length) {
                this.push(val);
            }
            else {
                let newNode = new Node(val);
                let targetNode = this.get(index);
                let preNode = targetNode.prev;
                newNode.next = targetNode;
                targetNode.prev = newNode;
                preNode.next = newNode;
                newNode.prev = preNode;
                this.length++;
            }
            return true;
        }
        remove(index) {
            if (index < 0 || index > this.length)
                return false;
            if (index === 0) {
                this.shift();
            }
            else if (index === this.length) {
                this.pop();
            }
            else {
                let node = this.get(index);
                let preNode = node.prev;
                let nextNode = node.next;
                preNode.next = nextNode;
                nextNode.prev = preNode;
                node.next = null;
                node.prev = null;
            }
            return true;
        }
        print() {
            let curNode = this.head;
            let arr = [];
            while (curNode != null) {
                arr.push(curNode.val);
                curNode = curNode.next;
            }
            console.log(arr);
        }
    }
    let list = new DoublyLinkedList();
    list.push(3);
    list.push("yes");
    list.push("abc");
    list.print();
})(dataStructure || (dataStructure = {}));
//# sourceMappingURL=doubly-linked-list.js.map