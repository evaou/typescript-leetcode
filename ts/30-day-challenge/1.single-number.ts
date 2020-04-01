/*
Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:
Input: [2,2,1]
Output: 1

Example 2:
Input: [4,1,2,1,2]
Output: 4
*/

function singleNumber(nums: number[]): number {
    let frq: {[key: number]: number} = {}; 

    for (let num of nums) {
        if (num in frq) {
            delete frq[num];
        } else {
            frq[num] = 1;
        }
    }

    return +Object.keys(frq)[0]; 
}

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));