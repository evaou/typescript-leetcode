function naiveSearch(longStr: string, shortStr: string): number {
  let count = 0;
  let isMatched = false;

  for (let i = 0; i <= longStr.length - shortStr.length; i++) {
    isMatched = true;
    for (var j = 0; j < shortStr.length; j++) {
      if (longStr[i + j] !== shortStr[j]) {
        isMatched = false;
        break;
      }
    }

    if (isMatched) count++;
  }

  return count;
}

console.log(naiveSearch("lorie loled", "lo"));
