namespace Problem {
  function isPalindrome(s: string): boolean {
    if (s.length <= 1) return true;

    if (s[0] !== s[s.length - 1]) {
      return false;
    } else {
      return isPalindrome(s.substring(1, s.length - 1));
    }
  }
}
