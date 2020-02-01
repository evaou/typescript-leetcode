namespace Problem {
  function reverse(s: string): string {
    if (s.length === 0) return "";

    let lastIdx = s.length - 1;
    return s.charAt(lastIdx) + reverse(s.substring(0, lastIdx));
  }
}
