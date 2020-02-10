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

### Complexcity
| Algorithm       | Best Time     | Average Time  | Worst Time    | Space         |
| :-------------: | :-----------: | :-----------: | :-----------: | :-----------: |
| Linear Search   | *O(1)*        | *O(n)*        | *O(n)*        |               |
| Binary Search   | *O(1)*        | *O(log n)*    | *O(log n)*    |               |
| Bubble Sort     | *O(n)*        | *O(n^2)*      | *O(n^2)*      | *O(1)*        |
| Insertion Sort  | *O(n)*        | *O(n^2)*      | *O(n^2)*      | *O(1)*        |
| Selection Sort  | *O(n^2)*      | *O(n^2)*      | *O(n^2)*      | *O(1)*        |
| Merge Sort      | *O(n log n)*  | *O(n log n)*  | *O(n log n)*  | *O(n)*        |
| Quick Sort      | *O(n log n)*  | *O(n log n)*  | *O(^2)*       | *O(log n)*    |

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

### Insertion Sort
- insert unsorted element onto the appropriate place of sorted array

### Selection Sort
- select the index of the smallest unsorted value and then swap it with the first unsorted index

### Merge Sort
- split input array onto two equal sub arrays until sub array length is less than two, and then merge sub arrays

### Quick Sort
- use pivot value to split input array onto two sub arrays in place until sub array length is less than two