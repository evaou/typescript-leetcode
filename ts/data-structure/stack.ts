namespace dataStructure {
  class Node {
    value: number;
    next: Node | null;

    constructor(value: number) {
      this.value = value;
      this.next = null;
    }
  }

  class Stack {
    first: Node | null;
    last: Node | null;
    size: number;

    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
    }

    push(value: number): number {
      let newNode = new Node(value);
      if (!this.first) {
        this.first = newNode;
        this.last = newNode;
      } else {
        let tempNode = this.first;
        this.first = newNode;
        this.first.next = tempNode;
      }

      return ++this.size;
    }

    pop(): number | null {
      if (!this.first) return null;

      let tempNode = this.first;
      if (this.first === this.last) {
        this.last = null;
      }
      this.first = this.first.next;
      this.size--;

      return tempNode.value;
    }
  }
}
