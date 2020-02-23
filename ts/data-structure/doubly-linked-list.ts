namespace dataStructure {
  type NodeValue = number | string;
  type Pointer = Node | null;

  class Node {
    val: NodeValue;
    next: Pointer;
    prev: Pointer;

    constructor(val: NodeValue) {
      this.val = val;
      this.next = null;
      this.prev = null;
    }
  }

  class DoublyLinkedList {
    head: Pointer;
    tail: Pointer;
    length: number;

    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }

    push(val: NodeValue): DoublyLinkedList {
      let node = new Node(val);

      if (this.length === 0) {
        this.head = node;
        this.tail = node;
      } else {
        this.tail!.next = node;
        node.prev = this.tail;
        this.tail = node;
      }

      this.length++;

      return this;
    }

    pop(): Node | null {
      if (!this.head) return null;

      let result = this.tail;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = this.tail!.prev;
        this.tail!.next = null;
      }

      this.length--;
      result!.prev = null;

      return result;
    }

    shift(): Node | null {
      if (!this.head) return null;

      let result = this.head;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head!.prev = null;
        result.next = null;
      }

      this.length--;
      return result;
    }

    unshift(val: NodeValue) {
      let newNode = new Node(val);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }

      this.length++;
    }

    get(index: number): Node | null {
      if (index < 0 || index >= this.length) return null;

      let halfIndex = Math.floor(this.length / 2);
      let count: number;
      let node: Node;
      if (index <= halfIndex && this.head) {
        count = 0;
        node = this.head;
        while (count !== index) {
          node = node.next!;
          count++;
        }
      } else {
        count = this.length - 1;
        node = this.tail!;
        while (count !== index) {
          node = node.prev!;
          count--;
        }
      }

      return node;
    }

    set(index: number, val: NodeValue): boolean {
      let node = this.get(index);
      if (!node) return false;
      node.val = val;
      return true;
    }

    insert(index: number, val: NodeValue): boolean {
      if (index < 0 || index > this.length) return false;

      if (index === 0) {
        this.unshift(val);
      } else if (index === this.length) {
        this.push(val);
      } else {
        let newNode = new Node(val);
        let targetNode = this.get(index);
        let preNode = targetNode!.prev;
        newNode.next = targetNode;
        targetNode!.prev = newNode;
        preNode!.next = newNode;
        newNode.prev = preNode;
        this.length++;
      }

      return true;
    }

    remove(index: number): boolean {
      if (index < 0 || index > this.length) return false;

      if (index === 0) {
        this.shift();
      } else if (index === this.length) {
        this.pop();
      } else {
        let node = this.get(index);
        let preNode = node!.prev;
        let nextNode = node!.next;
        preNode!.next = nextNode;
        nextNode!.prev = preNode;
        node!.next = null;
        node!.prev = null;
      }

      return true;
    }

    print() {
      let curNode = this.head;
      let arr: NodeValue[] = [];

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
}
