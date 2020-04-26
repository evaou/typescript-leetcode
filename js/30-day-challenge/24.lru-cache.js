"use strict";
/*
Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

The cache is initialized with a positive capacity.

Follow up:
Could you do both operations in O(1) time complexity?

Example:

LRUCache cache = new LRUCache( 2 );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4
*/
var leetcode;
(function (leetcode) {
    class Node {
        constructor(key, value) {
            this.key = key;
            this.value = value;
            this.prev = null;
            this.next = null;
        }
    }
    class DoublyLinkedList {
        constructor() {
            this.head = new Node(0, 0);
            this.tail = new Node(0, 0);
            this.head.next = this.tail;
            this.tail.prev = this.head;
        }
        addNode(node) {
            node.prev = this.head;
            node.next = this.head.next;
            if (this.head.next) {
                this.head.next.prev = node;
            }
            this.head.next = node;
        }
        removeNode(node) {
            if (node.prev) {
                node.prev.next = node.next;
            }
            if (node.next) {
                node.next.prev = node.prev;
            }
        }
        moveNodeToHead(node) {
            this.removeNode(node);
            this.addNode(node);
        }
        popTail() {
            let node = this.tail.prev;
            this.removeNode(node);
            return node;
        }
    }
    class LRUCache {
        constructor(capacity) {
            this.capacity = capacity;
            this.cache = {};
            this.list = new DoublyLinkedList();
            this.count = 0;
        }
        put(key, value) {
            let node;
            if (key in this.cache) {
                node = this.cache[key];
                node.value = value;
                this.list.moveNodeToHead(node);
            }
            else {
                node = new Node(key, value);
                this.list.addNode(node);
                this.cache[key] = node;
                this.count++;
                if (this.count > this.capacity) {
                    node = this.list.popTail();
                    this.list.removeNode(node);
                    delete this.cache[node.key];
                    this.count--;
                }
            }
        }
        get(key) {
            let node;
            if (key in this.cache) {
                node = this.cache[key];
                this.list.moveNodeToHead(node);
                return node.value;
            }
            return -1;
        }
    }
    let cache = new LRUCache(2);
    cache.put(1, 1);
    cache.put(2, 2);
    console.log(cache.get(1)); // returns 1
    cache.put(3, 3); // evicts key 2
    console.log(cache.get(2)); // returns -1 (not found)
    cache.put(4, 4); // evicts key 1
    console.log(cache.get(1)); // returns -1 (not found)
    console.log(cache.get(3)); // returns 3
    console.log(cache.get(4)); // returns 4
    console.log("");
    cache = new LRUCache(2);
    console.log(cache.get(2)); // -1
    cache.put(2, 6);
    console.log(cache.get(1)); // -1
    cache.put(1, 5);
    cache.put(1, 2);
    console.log(cache.get(1)); // 2
    console.log(cache.get(2)); // 6
    console.log("");
    cache = new LRUCache(1);
    cache.put(2, 1);
    console.log(cache.get(2)); // 1
    cache.put(3, 2);
    console.log(cache.get(2)); // -1
    console.log(cache.get(3)); // 2
})(leetcode || (leetcode = {}));
//# sourceMappingURL=24.lru-cache.js.map