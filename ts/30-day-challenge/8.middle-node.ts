/*
Given a non-empty, singly linked list with head node head, return a middle node of linked list.

If there are two middle nodes, return the second middle node.

 

Example 1:

Input: [1,2,3,4,5]
Output: Node 3 from this list (Serialization: [3,4,5])
The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
Note that we returned a ListNode object ans, such that:
ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.

Example 2:

Input: [1,2,3,4,5,6]
Output: Node 4 from this list (Serialization: [4,5,6])
Since the list has two middle nodes with values 3 and 4, we return the second one.
*/

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  head: ListNode | null;
  tail: ListNode | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  add(val: number) {
    let newNode = new ListNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }
}

function middleNode(head: ListNode): ListNode {
  let count: number = 0;
  let curNode: ListNode = head;
  let tmpNode: ListNode | null;
  let tmpCount: number;

  while (true) {
    tmpNode = curNode;
    tmpCount = 0;

    while (tmpNode && tmpCount < count) {
      tmpNode = tmpNode.next;
      tmpCount++;
    }

    if (tmpNode === null || tmpNode.next === null) {
      break;
    }

    count++;
    curNode = curNode.next!;
  }

  return curNode;
}

let ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);
console.log(middleNode(ll.head!).val); // 3

ll.add(6);
console.log(middleNode(ll.head!).val); // 4
