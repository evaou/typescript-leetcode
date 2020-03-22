function countZeroes(arr: number[]): number {
  let startIdx = 0;
  let endIdx = arr.length - 1;
  let midIdx = Math.floor((startIdx + endIdx) / 2);
  let zeroCount: number;

  if (!arr[0]) {
    return arr.length;
  }

  if (arr[arr.length-1]) {
    return 0;
  }

  while (true) {
    if (arr[midIdx]) {
      startIdx = midIdx;
    } else {
      if (arr[midIdx - 1]) {
        break;
      }
      endIdx = midIdx;
    }

    midIdx = Math.floor((startIdx + endIdx) / 2);
  }

  zeroCount = arr.length - midIdx;
  return zeroCount;
}

console.log(countZeroes([1, 1, 1, 1, 0, 0])); // 2
console.log(countZeroes([1, 0, 0, 0, 0])); // 4
console.log(countZeroes([0, 0, 0])); // 3
console.log(countZeroes([1, 1, 1, 1])); // 0
