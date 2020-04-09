/*
Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Example 1:

Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".

Example 2:

Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".

Example 3:

Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".

Example 4:

Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".
*/

function backspaceCompare(S: string, T: string): boolean {
  let isEqual: boolean = true;
  let sIdx: number = S.length - 1;
  let tIdx: number = T.length - 1;
  let backStr: string = "#";
  let backCount: number;

  while (sIdx >= 0 || tIdx >= 0) {
    backCount = 0;
    while (
      (sIdx >= 0 && S.charAt(sIdx) === backStr.charAt(0)) ||
      backCount > 0
    ) {
      if (S.charAt(sIdx) === backStr.charAt(0)) {
        backCount++;
      } else {
        backCount--;
      }
      sIdx--;
    }

    backCount = 0;
    while (
      (tIdx >= 0 && T.charAt(tIdx) === backStr.charAt(0)) ||
      backCount > 0
    ) {
      if (T.charAt(tIdx) === backStr.charAt(0)) {
        backCount++;
      } else {
        backCount--;
      }
      tIdx--;
    }

    if (S.charAt(sIdx) !== T.charAt(tIdx)) {
      isEqual = false;
      break;
    } else {
      sIdx--;
      tIdx--;
    }
  }

  return isEqual;
}

console.log(backspaceCompare("nzp#o#g", "b#nzp#o#g")); // true
console.log(backspaceCompare("bbbextm", "bbb#extm")); // false
console.log(backspaceCompare("ab#c", "ad#c")); // true
console.log(backspaceCompare("ab##", "c#d#")); // true
console.log(backspaceCompare("a##c", "#a#c")); // true
console.log(backspaceCompare("a#c", "b")); // false
