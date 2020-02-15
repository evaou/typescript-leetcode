function getDigit(num: number, pos: number): number {
  let result = Math.floor(Math.abs(num) / Math.pow(10, pos)) % 10;

  return result;
}

function getDigitCount(num: number): number {
    let result = Math.floor(Math.log10(Math.abs(num))) + 1;
    
    return result;
}

function getMaxDigitCount(nums: number[]): number {
    let targetCount = 0;

    for (let i = 0; i < nums.length; i++) {
        targetCount = Math.max(getDigitCount(nums[i]), targetCount);
    }

    return targetCount;
}

function radixSort(nums: number[]): number[] {
    let maxDigitCount = getMaxDigitCount(nums);
    for (let i = 0; i < maxDigitCount; i++) {
        let bucket: number[][] = Array.from({length: 10}, () => []);
        for (let j = 0; j < nums.length; j++) {
            let num = nums[j];
            let digit = getDigit(num, i);
            bucket[digit].push(num);
        }

        nums = [];
        for (let k = 0; k < 10; k++) {
            nums.push(...bucket[k]);
        }
    }

    return nums;
}

console.log(radixSort([1234, 56, 7]));
console.log(radixSort([1, 1, 11111, 1]));
console.log(radixSort([12, 34, 56, 78]));