namespace exercise {
  function bubbleSort(arr: number[], fun = compareNum): number[] {
    let checkIdx: number;
    let tmpVal: number;

    for (let stopIdx = arr.length - 1; stopIdx > 0; stopIdx--) {
      checkIdx = 0;

      while (checkIdx < stopIdx) {
        if (fun(arr[checkIdx], arr[checkIdx + 1]) >= 1) {
          tmpVal = arr[checkIdx];
          arr[checkIdx] = arr[checkIdx + 1];
          arr[checkIdx + 1] = tmpVal;
        }

        checkIdx++;
      }
    }

    return arr;
  }

  function compareNum(num1: number, num2: number): number {
    let result: number;

    if (num1 === num2) {
      result = 0;
    } else if (num1 < num2) {
      result = -1;
    } else {
      result = 1;
    }

    return result;
  }

  console.log(bubbleSort([4, 20, 12, 10, 7, 9]));
}
