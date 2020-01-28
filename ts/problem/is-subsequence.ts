function isSubsequence(s1: string, s2: string) {
    // return false if s1 length is larger than s2
    if (s1.length > s2.length) {
        return false;
    }

    // set two indexts as 0 for s1 and s2
    let idx1 = 0;
    let idx2 = 0;

    // ensure index1 is less than s1 length, index2 is less than s2 length
    while (idx1 < s1.length && idx2 < s2.length) {
        // if character at index1 is equal to character at index2
        if (s1[idx1] === s2[idx2]) {   
            // index1++, index2++
            idx1++;
            idx2++;
        } else {
        // else
            // index2++
            idx2++;
        }
    }

    // if index1 is less than s1 length
    if (idx1 < s1.length) {
        // return false
        return false;
    } else {
    // else
        // return true
        return true;
    }

}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false