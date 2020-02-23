namespace dataStructure {
  class Node {
    val: number;
    next: Node | null;
    prev: Node | null;

    constructor(val: number) {
      this.val = val;
      this.next = null;
      this.prev = null;
    }
  }

  class DoublyLinkedList {
    head: Node | null;
    tail: Node | null;
    length: number;

    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }

    push(val: number): DoublyLinkedList {
      let newNode = new Node(val);

      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail!.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }

      this.length++;

      return this;
    }

    pop(): Node | undefined {
      if (!this.tail) return undefined;

      let node = this.tail;
      this.tail = this.tail.prev;
      node.prev = null;
      if (!this.tail) {
        this.head = null;
      }

      this.length--;

      return node;
    }

    unshift(val: number): DoublyLinkedList {
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

      return this;
    }

    shift(): Node | undefined {
      if (!this.head) {
        return undefined;
      }

      let node = this.head;
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }

      node.next = null;
      this.length--;

      return node;
    }

    get(index: number): Node | null {
      if (index < 0 || index >= this.length) return null;
      if (index === 0) return this.head;
      if (index === this.length - 1) return this.tail;

      let midIndex = this.length / 2;
      let count: number;
      let node: Node;
      if (index <= midIndex) {
        count = 0;
        node = this.head!;
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

    set(index: number, val: number): boolean {
      if (index < 0 || index >= this.length) return false;

      let node = this.get(index);
      node!.val = val;

      return true;
    }

    remove(index: number): Node | undefined {
      if (index < 0 || index >= this.length) return undefined;
      if (index === 0) return this.shift();
      if (index === this.length - 1) return this.pop();

      let node = this.get(index);
      if (!node) return undefined;
      
      let preNode = node.prev;
      let nextNode = node.next;
      node.prev = null;
      node.next = null;
      preNode!.next = nextNode;
      nextNode!.prev = preNode;
      this.length--;

      return node;
    }

    insert(index: number, val: number): boolean {
      if (index < 0 || index > this.length) return false;

      if (index === 0) {
        this.unshift(val);
      } else if (index === this.length) {
        this.push(val);
      } else {
        let newNode = new Node(val);
        let node = this.get(index); 
        let preNode = node!.prev;
        preNode!.next = newNode;
        newNode.prev = preNode;
        newNode.next = node;
        node!.prev = newNode;

        this.length++;
      }

      return true;
    }

    reverse(): DoublyLinkedList {
      if (this.length <= 1) return this;

      let tmpNode: Node;
      tmpNode = this.head!;
      this.head = this.tail;
      this.tail = tmpNode;

      let curNode = this.head;
      let nextNode = curNode!.next;
      let preNode = curNode!.prev;

      while (curNode != this.tail) {
        curNode!.prev = nextNode;
        curNode!.next = preNode;
        nextNode = curNode;
        curNode = preNode;
        preNode = preNode!.prev;
      }

      curNode!.prev = nextNode;
      curNode!.next = preNode;

      return this;
    }                              
  }
}
