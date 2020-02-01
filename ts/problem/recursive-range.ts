function recursiveRange(n: number): number {
    if (n === 0) return 0;

   return (n + recursiveRange(n-1));
}
