/*
Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:

Any left parenthesis '(' must have a corresponding right parenthesis ')'.
Any right parenthesis ')' must have a corresponding left parenthesis '('.
Left parenthesis '(' must go before the corresponding right parenthesis ')'.
'*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
An empty string is also valid.

Example 1:

Input: "()"
Output: True

Example 2:

Input: "(*)"
Output: True

Example 3:

Input: "(*))"
Output: True

Note:
The string size will be in the range [1, 100].
*/

function checkValidString(s: string): boolean {
  let char: string;
  let starCount: number = 0;
  let rightCount: number = 0;
  let leftCount: number = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    char = s.charAt(i);

    if (char === "(") {
      if (rightCount > 0) {
        rightCount--;
      } else if (starCount > 0) {
        starCount--;
      } else {
        return false;
      }
    } else if (char === ")") {
      rightCount++;
    } else {
      starCount++;
    }
  }

  if (rightCount === 0) {
    return true;
  }

  leftCount = 0;
  starCount = 0;
  for (let i = 0; i < s.length; i++) {
    char = s.charAt(i);

    if (char === ")") {
      if (leftCount > 0) {
        leftCount--;
      } else if (starCount > 0) {
        starCount--;
      } else {
        return false;
      }
    } else if (char === "(") {
      leftCount++;
    } else {
      starCount++;
    }
  }

  return true;
}

console.log(
  checkValidString(
    "((((()(()()()*()(((((*)()*(**(())))))(())()())(((())())())))))))(((((())*)))()))(()((*()*(*)))(*)()"
  )
); // true
console.log(
  checkValidString(
    "(()(()))(()()()))))((((()*()*(())())(()))((*()(*((*(*()))()(())*()()))*)*()))()()(())()(()))())))"
  )
); // false
console.log(checkValidString("(*()")); // true
console.log(checkValidString("()")); // true
console.log(checkValidString("(*)")); // true
console.log(checkValidString("(*))")); // true
