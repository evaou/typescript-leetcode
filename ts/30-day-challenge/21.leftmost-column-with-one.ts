/*
A binary matrix means that all elements are 0 or 1. For each individual row of the matrix, this row is sorted in non-decreasing order.

Given a row-sorted binary matrix binaryMatrix, return leftmost column index(0-indexed) with at least a 1 in it. If such index doesn't exist, return -1.

You can't access the Binary Matrix directly.  You may only access the matrix using a BinaryMatrix interface:

BinaryMatrix.get(row, col) returns the element of the matrix at index (row, col) (0-indexed).
BinaryMatrix.dimensions() returns a list of 2 elements [rows, cols], which means the matrix is rows * cols.
Submissions making more than 1000 calls to BinaryMatrix.get will be judged Wrong Answer.  Also, any solutions that attempt to circumvent the judge will result in disqualification.

For custom testing purposes you're given the binary matrix mat as input in the following four examples. You will not have access the binary matrix directly.
*/

class BinaryMatrix {
  nums: number[][];

  constructor(arr: number[][]) {
    this.nums = arr;
  }

  get(row: number, col: number): number {
    return this.nums[row][col];
  }

  dimensions(): number[] {
    return [this.nums.length, this.nums[0].length];
  }
}

function leftMostColumnWithOne(binaryMatrix: BinaryMatrix): number {
  let row: number = binaryMatrix.dimensions()[0];
  let col: number = binaryMatrix.dimensions()[1];
  let i: number = row - 1;
  let j: number = col - 1;
  let targetCol: number = -1;

  while (i >= 0 && j >= 0) {
    if (binaryMatrix.get(i, j) === 0) {
      i--;
    } else {
      j--;
    }
  }

  if (j < col - 1) {
    targetCol = j + 1;
  }

  return targetCol;
}

let arr = [
  [1, 1, 1, 1, 1],
  [0, 0, 0, 1, 1],
  [0, 0, 1, 1, 1],
  [0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0],
];
let binaryMatrix = new BinaryMatrix(arr);
console.log(leftMostColumnWithOne(binaryMatrix)); // 0

arr = [
  [0, 0],
  [1, 1],
];
binaryMatrix = new BinaryMatrix(arr);
console.log(leftMostColumnWithOne(binaryMatrix)); // 0

arr = [
  [0, 0],
  [0, 1],
];
binaryMatrix = new BinaryMatrix(arr);
console.log(leftMostColumnWithOne(binaryMatrix)); // 1

arr = [
  [0, 0],
  [0, 0],
];
binaryMatrix = new BinaryMatrix(arr);
console.log(leftMostColumnWithOne(binaryMatrix)); // -1

arr = [
  [0, 0, 0, 1],
  [0, 0, 1, 1],
  [0, 1, 1, 1],
];
binaryMatrix = new BinaryMatrix(arr);
console.log(leftMostColumnWithOne(binaryMatrix)); // 1
