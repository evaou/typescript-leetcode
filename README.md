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

### Time Complexcity
| Algorithm       | Best       | Average     | Worst         |
| :-------------: | :--------: | :---------: | :-----------: |
| Linear Search   | *O(1)*     | *O(n)*      | *O(n)*        |
| Binary Search   | *O(1)*     | *O(log n)*  | *O(log n)*    |
| Bubble Sort     | *O(n)*     | *O(n^2)*    | *O(n^2)*      |
| Selection Sort  | *O(n)*     | *O(n^2)*    | *O(n^2)*      |

### Recursion
- call the same function with different input until reaching ending base case

### Sorting
- rearrange collection items to be ordered

### Linear Search
- check every element of an array

### Binary Search
- eliminate half elements of a sorted array

### Bubble Sort
- bubble up the largest value to the top

### Selection Sort
- select the index of the smallest unsorted value and then swap it with the first unsorted index