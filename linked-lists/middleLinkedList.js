// Given a non-empty, singly linked list with head node head, return a middle node of linked list.

// If there are two middle nodes, return the second middle node.

// Example 1:

// Input: [1,2,3,4,5]
// Output: Node 3 from this list (Serialization: [3,4,5])
// The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
// Note that we returned a ListNode object ans, such that:
// ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.
// Example 2:

// Input: [1,2,3,4,5,6]
// Output: Node 4 from this list (Serialization: [4,5,6])
// Since the list has two middle nodes with values 3 and 4, we return the second one.

// Note:

// The number of nodes in the given list will be between 1 and 100.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function middleNode(head) {
  let length = 0;
  let middle;
  let count = 0;
  let headCopy = head;
  while (head !== null) {
    head = head.next;
    length++;
  }
  if (length % 2 === 1) {
    middle = Math.floor(length / 2);
  } else {
    middle = length / 2;
  }
  while (headCopy !== null && count !== middle) {
    headCopy = headCopy.next;
    count++;
  }
  return headCopy;
}

//Another solution is to add every node to an array and then return the array[array.length/2]
