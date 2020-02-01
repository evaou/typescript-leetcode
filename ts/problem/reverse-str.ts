function reverseStr(s: string): string {
    if (s.length === 0) return "";

    let lastIdx = s.length - 1;
    return (s.charAt(lastIdx) + reverseStr(s.substring(0, lastIdx)));
}