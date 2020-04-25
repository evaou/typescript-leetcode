/*
Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND of all numbers in this range, inclusive.

Example 1:

Input: [5,7]
Output: 4

Example 2:

Input: [0,1]
Output: 0
*/

function rangeBitwiseAnd(m: number, n: number): number {
  let exponent: number = 1;

  while (m !== n) {
    m >>= 1;
    n >>= 1;
    exponent <<= 1;
  }

  return m * exponent;
}

console.log(rangeBitwiseAnd(1, 1)); // 1
console.log(rangeBitwiseAnd(1, 2)); // 0
console.log(rangeBitwiseAnd(5, 7)); // 4
console.log(rangeBitwiseAnd(0, 1)); // 0
