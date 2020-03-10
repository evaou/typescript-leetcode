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
| Quick Sort      | *O(n log n)*  | *O(n log n)*  | *O(n^2)*      | *O(log n)*    |
| Radix Sort      | *O(nk)*       | *O(nk)*       | *O(nk)*       | *O(n+k)*      |

- n: length of array
- k: number of digits

### Recursion
- call the same function with different input until reaching ending base case

### Sorting
- rearrange collection items to be ordered

### Linear Search
- check every element of an array

### Binary Search
- eliminate half elements of a sorted array

### Comparison Sort

#### Bubble Sort
- bubble up the largest value to the top

#### Insertion Sort
- insert unsorted element onto the appropriate place of sorted array

#### Selection Sort
- select the index of the smallest unsorted value and then swap it with the first unsorted index

#### Merge Sort
- split input array onto two equal sub arrays until sub array length is less than two, and then merge sub arrays

#### Quick Sort
- use pivot value to rearrange input array in place until sub array length is less than two

### Radix Sort
- rearrange list of numbers from right most digit to left

## Data Structure
- collection of values, which have relationship and applied operations

### Worst Time Complexcity
| Data Structure     | Insertion     | Removal       | Searching     | Access        |
| :----------------: | :-----------: | :-----------: | :-----------: | :-----------: |
| Singly Linked List | *O(1)*        | head *O(1)*, tail *O(n)* | *O(n)* |  *O(n)*   |
| Doubly Linked List | *O(1)*        | *O(1)*        | *O(n)*        |  *O(n)*       |
| Stack              | *O(1)*        | *O(1)*        | *O(n)*        |  *O(n)*       |
| Queue              | *O(1)*        | *O(1)*        | *O(n)*        |  *O(n)*       |
| Binary Search Tree | *O(log n)*    |               | *O(log n)*    |               |
| Binary Heap        | *O(log n)*    | *O(log n)*    | *O(n)*        |               |
| Hash Table         | *O(1)*        | *O(1)*        |               |  *O(1)*       |

### Singly Linked List
- consist of nodes, each node has a value and a pointer to another node or null
- has head, tail, length property
- head insertion and deletion is better than array

### Doubly Linked List
- have pointers to previous and next nodes
- take half time to find node
- take more memory for extra pointer

### Stack
- Last In First Out
- add or remove from the beginning of singly linked list

### Queue
- First In First Out
- add after the last node
- remove from the first node

### Tree
- consist of nodes in a parent/child relationship
- root, child, parent
- siblings: group of nodes with the same parent
- leaf: node without child
- edge: connection between two nodes

#### Binary Tree
- parent node has at most two children

#### Binary Search Tree
- left nodes are smaller than or equal to parent one
- right nodes greater than parent one
- root selection matters performance

#### Breadth First Search
- need more space to track nodes

#### Depth First Search
- need less space to track nodes

##### PreOrder
- node > left > right
- export tree structure for easy reconstructured or copied

##### PostOrder
- left > right > node

##### InOrder
- left > node > right
- get nodes in their underlying order

#### Heap
- as compact as possible
- left child is filled first
- no ordering between siblings
- easily represent with an array
- parent node at array index *n*, left node at *2n+1*, right node at *2n+2*
- child node at array index *n*, parent node at *floor((n-1)/2)*
- sink down: delete root, replace with last item, and swap with larger/smaller child
- for graph traversal

##### MaxBinaryHeap
- parent nodes are larger than child ones

##### MinBinaryHeap
- parent nodes are smaller than child ones
- priority queue: lower number means higher priority

### Hash Table
- store key-value pairs
- keys are not ordered
- key (hash function)> array index > array stores key-value pairs
- js has objects and maps
- hash function
  - fast with constant time (min)
  - distribute uniformly (multiply prime number)
  - deterministic (same input yields same output)
- collision
  - separate chaining (store multiple key-value pairs at the same index)
  - linear probing (find next empty slot)