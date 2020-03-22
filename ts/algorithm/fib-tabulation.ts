function fibTab(input: number) {
  if (input <= 2) {
    return 1;
  }

  let arr: number[] = [0, 1, 1];
  for (let i = 3; i <= input; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[input];
}

console.log(fibTab(10));
