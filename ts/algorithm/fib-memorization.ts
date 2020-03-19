function fibMem(input: number, arr: number[] = []): number {
  if (arr[input] !== undefined) {
    return arr[input];
  }

  if (input <= 2) {
      arr[input] = 1;
      return 1;
  }

  let result: number;

  result = fibMem(input - 1, arr) + fibMem(input - 2, arr);
  arr[input] = result;

  return result;
}

console.log(fibMem(8));
