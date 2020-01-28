function areThereDuplicates(...inputs: any[]) {
    // loop thru inputs to create frequency object
    type frqType = {
        [key: number]: number;
        [key: string]: number;
    };
    let frqObj: frqType = {};
    for (let chr of inputs) {
        if (chr in frqObj) {
            frqObj[chr] += 1;
        } else {
            frqObj[chr] = 1;
        }
    }

    // loop thru frequency object to see if any value is > 1
    for (let chr in frqObj) {
        if (frqObj[chr] > 1) {
            return true;
        }
    }
    
    // cannot find duplicate items
    return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true