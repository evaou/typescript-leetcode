function someRecursive(arr: number[], func: (_: number) => boolean): boolean {
    if (arr.length === 0) return false;
    if (func(arr[0])) return true; 
    return someRecursive(arr.slice(1), func);
}

const isOdd = (val: number) => val % 2 !== 0;

console.log(someRecursive([1,2,3,4], isOdd)); // true
console.log(someRecursive([4,6,8,9], isOdd)); // true
console.log(someRecursive([4,6,8], isOdd)); // false
console.log(someRecursive([4,6,8], val => val > 10)); // false