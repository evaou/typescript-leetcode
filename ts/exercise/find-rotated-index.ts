function findRotatedIndex(arr: number[], input: number): number {
  if (arr.length === 0) {
    return -1;
  }

  let offsetIdx = binarySearchStart(arr, 0, arr.length - 1);
  let offsetInitStartIdx = (0 + offsetIdx) % arr.length;
  let offsetInitEndIdx = (arr.length - 1 + offsetIdx) % arr.length;

  return binarySearchRotated(
    arr,
    0,
    arr.length - 1,
    offsetIdx,
    offsetInitStartIdx,
    offsetInitEndIdx,
    input
  );
}

function binarySearchStart(
  arr: number[],
  startIdx: number,
  endIdx: number
): number {
  let midIdx = Math.floor((startIdx + endIdx) / 2);

  if (midIdx !== endIdx && arr[midIdx] > arr[midIdx + 1]) {
    return midIdx + 1;
  }

  if (midIdx !== startIdx && arr[midIdx] < arr[midIdx - 1]) {
    return midIdx;
  }

  if (arr[midIdx] > arr[endIdx]) {
    return binarySearchStart(arr, midIdx + 1, endIdx);
  } else {
    return binarySearchStart(arr, startIdx, midIdx - 1);
  }
}

function binarySearchRotated(
  arr: number[],
  startIdx: number,
  endIdx: number,
  offsetIdx: number,
  offsetInitStartIdx: number,
  offsetInitEndIdx: number,
  input: number
): number {
  let midIdx = Math.floor((startIdx + endIdx) / 2);
  let offsetMidIdx = (midIdx + offsetIdx) % arr.length;

  if (arr[offsetMidIdx] === input) {
    return offsetMidIdx;
  } else if (
    offsetMidIdx === offsetInitStartIdx ||
    offsetMidIdx === offsetInitEndIdx
  ) {
    return -1;
  }

  if (arr[offsetMidIdx] > input) {
    return binarySearchRotated(
      arr,
      startIdx,
      midIdx - 1,
      offsetIdx,
      offsetInitStartIdx,
      offsetInitEndIdx,
      input
    );
  } else {
    return binarySearchRotated(
      arr,
      midIdx + 1,
      endIdx,
      offsetIdx,
      offsetInitStartIdx,
      offsetInitEndIdx,
      input
    );
  }
}

console.log(findRotatedIndex([3, 4, 1, 2], 4)); // 1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)); // 2
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)); // 6
console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)); // -1
