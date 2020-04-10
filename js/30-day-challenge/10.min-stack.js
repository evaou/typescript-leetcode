"use strict";
/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
 

Example:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.
*/
class MinStack {
    constructor() {
        this.arr = [];
        this.minVal = Infinity;
    }
    push(x) {
        this.arr.push(x);
        if (x < this.minVal) {
            this.minVal = x;
        }
    }
    pop() {
        if (this.minVal === this.arr[this.arr.length - 1]) {
            this.minVal = Infinity;
            for (let i = 0; i < this.arr.length - 1; i++) {
                if (this.arr[i] < this.minVal) {
                    this.minVal = this.arr[i];
                }
            }
        }
        delete this.arr[this.arr.length - 1];
        this.arr.length -= 1;
    }
    top() {
        return this.arr[this.arr.length - 1];
    }
    getMin() {
        return this.minVal;
    }
}
let ms = new MinStack();
ms.push(-2);
ms.push(0);
ms.push(-3);
console.log(ms.getMin());
ms.pop();
console.log(ms.top());
console.log(ms.getMin());
//# sourceMappingURL=10.min-stack.js.map