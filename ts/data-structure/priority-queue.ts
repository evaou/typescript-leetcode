namespace dataStructure {
  class Node {
    value: string;
    priority: number;
    constructor(value: string, priority: number) {
      this.value = value;
      this.priority = priority;
    }
  }

  class PriorityQueue {
    values: Node[];

    constructor() {
      this.values = [];
    }

    enqueue(value: string, priority: number) {
      let newNode = new Node(value, priority);
      this.values.push(newNode);
      this.bubbleUp();
    }

    swap(index1: number, index2: number) {
      let tmpNode = this.values[index1];
      this.values[index1] = this.values[index2];
      this.values[index2] = tmpNode;
    }

    bubbleUp() {
      let index = this.values.length - 1;
      let parentIndex = Math.floor((index - 1) / 2);

      while (index > 0 && this.values[index].priority < this.values[parentIndex].priority) {
        this.swap(index, parentIndex);
        index = parentIndex;
        parentIndex = Math.floor((index - 1) / 2);
      }
    }

    dequeue(): Node {
      let minNode = this.values[0];
      let endNode = this.values.pop();

      if (this.values.length > 0) {
        this.values[0] = endNode!;
        this.sinkDown();
      }

      return minNode;
    }

    sinkDown() {
      let parentIndex = 0;
      let leftIndex = 2 * parentIndex + 1;
      let rightIndex = 2 * parentIndex + 2;
      let leftNode: Node | null;
      let rightNode: Node | null;
      let childIndex: number;

      while (parentIndex < this.values.length) {
        if (leftIndex < this.values.length) {
          leftNode = this.values[leftIndex];
        } else {
          leftNode = null;
        }

        if (rightIndex < this.values.length) {
          rightNode = this.values[rightIndex];
        } else {
          rightNode = null;
        }

        if (!leftNode) {
          childIndex = rightIndex;
        } else if (!rightNode) {
          childIndex = leftIndex;
        } else if (leftNode.priority < rightNode.priority) {
          childIndex = leftIndex;
        } else {
          childIndex = rightIndex;
        }

        if (this.values[parentIndex] && this.values[childIndex]
            && this.values[parentIndex].priority > this.values[childIndex].priority) {
          this.swap(parentIndex, childIndex);
          parentIndex = childIndex;
          leftIndex = 2 * parentIndex + 1;
          rightIndex = 2 * parentIndex + 2;
        } else {
          break;
        }
      }

    }
  }

  let ER = new PriorityQueue();
  ER.enqueue("common cold", 5);
  ER.enqueue("gunshot wound", 1);
  ER.enqueue("high fever", 4);
  ER.enqueue("broken arm", 2);
  ER.enqueue("glass in foot", 3);
  console.log(ER.dequeue()); // gunshot wound
  console.log(ER.dequeue()); // broken arm
  console.log(ER.dequeue()); // glass in foot
}
