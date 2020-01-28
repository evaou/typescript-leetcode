function areThereDuplicates2(...inputs: any[]) {
    let sortedInputs = inputs.sort((a, b) => (a < b ? -1 : 1));

    if (sortedInputs.length < 2) {
        return false;
    }
    
    // set pointers for the first two items
    let idx1 = 0;
    let idx2 = 1;

    // loop the two adjacent pointers thru sorted inputs 
    while (idx2 < sortedInputs.length) {
        // return true if values are the same
        if (sortedInputs[idx1] === sortedInputs[idx2]) {
            return true;
        }

        idx1++;
        idx2++;
    }

    // return false
    return false;
}

console.log(areThereDuplicates2(1, 2, 3)); // false
console.log(areThereDuplicates2(1, 2, 2)); // true
console.log(areThereDuplicates2('a', 'b', 'c', 'a')); // true