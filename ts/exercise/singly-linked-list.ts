namespace exercise {
  class Node {
    val: number;
    next: Node | null;

    constructor(value: number) {
      this.val = value;
      this.next = null;
    }
  }

  class SinglyLinkedList {
    head: Node | null;
    tail: Node | null;
    length: number;

    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }

    push(value: number): SinglyLinkedList {
      let newNode = new Node(value);

      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail!.next = newNode;
        this.tail = this.tail!.next;
      }

      this.length++;

      return this;
    }

    pop(): Node | null {
      if (!this.length) {
        return null;
      }

      let node = this.tail;
      let preNode: Node = this.head!;

      while (preNode?.next) {
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
      } else {
        return node;
      }
    }

    get(index: number): Node | null {
      if (index > this.length - 1) {
        return null;
      }

      let currentIndex = 0;
      let currentNode = this.head;
      while (index !== currentIndex) {
        currentNode = currentNode!.next;
        currentIndex++;
      }

      return currentNode;
    }

    insert(index: number, value: number): boolean {
      if (index < 0 || index > this.length) {
        return false;
      }

      let newNode = new Node(value);

      if (!this.length) {
        this.head = newNode;
        this.tail = newNode;
      } else if (index === this.length) {
        this.tail!.next = newNode;
        this.tail = newNode;
      } else {
        let currentIndex = 0;
        let currentNode: Node = this.head!;
        while (currentIndex + 1 !== index) {
          currentNode = currentNode.next!;
          currentIndex++;
        }

        newNode.next = currentNode.next;
        currentNode.next = newNode;
      }

      this.length++;
      return true;
    }

    rotate(num: number) {
      let count = 0;
      let tmpNode: Node;

      if (num >= 0) {
        while (count < num) {
          tmpNode = this.head!;
          this.head = this.head!.next;
          this.push(tmpNode.val);
          count++;
        }
      } else {
        num = -num;
        while (count < num) {
          tmpNode = this.pop()!;
          tmpNode.next = this.head;
          this.head = tmpNode;
          count++;
        }
      }
    }

    set(index: number, value: number): boolean {
      if (index < 0 || index >= this.length) {
        return false;
      }

      let currentIndex = 0;
      let currentNode: Node = this.head!;

      while (index !== currentIndex) {
        currentNode = currentNode.next!;
        currentIndex++;
      }

      currentNode.val = value;
      return true;
    }

    remove(index: number): Node | undefined {
      let curNode: Node | null;
      let preNode: Node | null = null;
      let curIdx: number = 0;

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
        preNode.next = curNode!.next;
      } else {
        this.head = curNode!.next;
      }
      curNode!.next = null;
      this.length--;

      return curNode!;
    }
  }

  let sll = new SinglyLinkedList();
  sll
    .push(5)
    .push(10)
    .push(15)
    .push(20);
  console.log(sll.remove(2)?.val);
  console.log(sll.remove(100));
  console.log(sll.length);
  console.log(sll.head?.val);
  console.log(sll.head?.next?.val);
  console.log(sll.head?.next?.next?.val);
}
