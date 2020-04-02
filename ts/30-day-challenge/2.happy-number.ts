/*
Write an algorithm to determine if a number is "happy".
A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Example: 
Input: 19
Output: true
Explanation: 
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
*/

function isHappy(n: number): boolean {
  let tmpN = n;
  let sum: number;
  let result: boolean = false;
  let obj: {[key: number]: number} = {};

  while (true) {
    if (tmpN === 1) {
      result = true;
      break;
    }

    sum = 0;
    for (let i of tmpN.toString()) {
      sum += Math.pow(+i, 2);
    }

    if (sum in obj) {
        break;
    } else {
        obj[sum] = 1;
    }

    tmpN = sum;
  }

  return result;
}

console.log(isHappy(2));
console.log(isHappy(1));
console.log(isHappy(19));