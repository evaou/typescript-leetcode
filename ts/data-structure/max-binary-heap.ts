class MaxBinaryHeap {
  values: number[];

  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
    //this.values = [12];
  }

  insert(value: number) {
    this.values.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);

    while (this.values[index] > this.values[parentIndex]) {
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  swap(index1: number, index2: number) {
    let tmpValue = this.values[index1];
    this.values[index1] = this.values[index2];
    this.values[index2] = tmpValue;
  }

  sinkDown() {
    let parentIndex = 0;
    let leftIndex = 2 * parentIndex + 1;
    let rightIndex = 2 * parentIndex + 2;
    let leftValue: number | null;
    let rightValue: number | null;
    let childIndex: number;

    while (true) {
      if (leftIndex < this.values.length) {
        leftValue = this.values[leftIndex];
      } else {
        leftValue = null;
      }

      if (rightIndex < this.values.length) {
        rightValue = this.values[rightIndex];
      } else {
        rightValue = null;
      }

      if (!leftValue) {
        childIndex = rightIndex;
      } else if (!rightValue) {
        childIndex = leftIndex;
      } else if (leftValue > rightValue) {
        childIndex = leftIndex;
      } else {
        childIndex = rightIndex;
      }

      if (this.values[parentIndex] < this.values[childIndex]) {
        this.swap(parentIndex, childIndex);
        parentIndex = childIndex;
        leftIndex = 2 * parentIndex + 1;
        rightIndex = 2 * parentIndex + 2;
      } else {
        break;
      }
    }
  }

  extractMax(): number {
    let max = this.values[0];
    let endValue = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = endValue!;
      this.sinkDown();
    }

    return max;
  }
}

let heap = new MaxBinaryHeap();
heap.insert(55);
console.log(heap.values); // [55, 39, 41, 18, 27, 12, 33]
console.log(heap.extractMax()); // 55
console.log(heap.values); // [41, 39, 33, 18, 27, 12]
