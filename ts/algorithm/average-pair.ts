function averagePair(arr: number[], target: number){
    // return false if array length is less than 2
    if (arr.length < 2) {
        return false;
    }

    // get target sum
    let targetSum = target * 2;

    // set two indexes to the first and last item
    let idx1 = 0;
    let idx2 = arr.length - 1;

    // ensure index1 is less than index2
    while (idx1 < idx2) {
        // get sum of values at index1 and index2
        let tmpSum = arr[idx1] + arr[idx2];

        // if sum is equal to target sum
        if (tmpSum === targetSum) {
            // return true
            return true;
        } else if (tmpSum < targetSum) {
        // else if sum is less than target sum
            // index1++
            idx1++;
        } else {
        // else 
            // index2--
            idx2--;
        }
    }
    
    // return false
    return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false