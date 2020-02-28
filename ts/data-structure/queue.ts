namespace dataStructure {
  class Node {
    value: number;
    next: Node | null;
    constructor(value: number) {
      this.value = value;
      this.next = null;
    }
  }

  class Queue {
    first: Node | null;
    last: Node | null;
    size: number;
    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
    }

    enqueue(value: number) {
      let newNode = new Node(value);
      if (!this.first) {
        this.first = newNode;
        this.last = newNode;
      } else {
        this.last!.next = newNode;
        this.last = newNode;
      }
      this.size++;
    }

    dequeue(): number | null {
      if (!this.first) return null;

      let node = this.first;
      if (this.first === this.last) {
        this.last = null;
      }
      this.first = this.first.next;

      this.size--;

      return node.value;
    }
  }
}
