"use strict";
/*
You have a queue of integers, you need to retrieve the first unique integer in the queue.

Implement the FirstUnique class:

FirstUnique(int[] nums) Initializes the object with the numbers in the queue.
int showFirstUnique() returns the value of the first unique integer of the queue, and returns -1 if there is no such integer.
void add(int value) insert value to the queue.
*/
class FirstUniqueNumber {
    constructor(nums) {
        this.uniqueNums = [];
        this.objs = {};
        this.nums = nums;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] in this.objs) {
                this.objs[nums[i]]++;
            }
            else {
                this.objs[nums[i]] = 1;
                this.uniqueNums.push(nums[i]);
            }
        }
    }
    add(value) {
        if (value in this.objs) {
            this.objs[value]++;
        }
        else {
            this.objs[value] = 1;
            this.uniqueNums.push(value);
        }
    }
    showFirstUnique() {
        let result = -1;
        for (let i = 0; i < this.uniqueNums.length; i++) {
            if (this.objs[this.uniqueNums[i]] === 1) {
                result = this.uniqueNums[i];
                break;
            }
        }
        return result;
    }
}
let firstUnique = new FirstUniqueNumber([7, 7, 7, 7, 7, 7]);
console.log(firstUnique.showFirstUnique()); // -1
firstUnique.add(7);
firstUnique.add(3);
firstUnique.add(3);
firstUnique.add(7);
firstUnique.add(17);
console.log(firstUnique.showFirstUnique()); // 17
firstUnique = new FirstUniqueNumber([2, 3, 5]);
console.log(firstUnique.showFirstUnique()); // 2
firstUnique.add(5);
console.log(firstUnique.showFirstUnique()); // 2
firstUnique.add(2);
console.log(firstUnique.showFirstUnique()); // 3
firstUnique.add(3);
console.log(firstUnique.showFirstUnique()); // -1
//# sourceMappingURL=29.first-unique-number.js.map