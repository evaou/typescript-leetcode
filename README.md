# Typescript Leetcode
Solve leetcode problems with typescript

## Step
1. use [vscode-leetcode](https://github.com/jdneo/vscode-leetcode) to generate initial js file including problem description in comment

2. generate initial ts file

        $ cp js/1.two-sum.js ts/1.two-sum.ts

3. solve problem in ts file

4. compile ts file onto js one

        $ npm run tsc

5. use [vscode-leetcode](https://github.com/jdneo/vscode-leetcode) to submit compiled js file onto leetcode

## Problem Solving

### Guideline
1. understand problem
2. explore examples
3. break down
4. solve
5. refactor

### Pattern
- frequency counter
- multiple pointers
- sliding window
- divide and conquer

## Algorithm

### Recursion
- call the same function with different input until reaching ending base case