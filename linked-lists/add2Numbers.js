// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function addTwoNumbers(l1, l2) {
  let newListHead = new ListNode(null);
  let current = newListHead;
  let carry = 0;
  let pointer1 = l1;
  let pointer2 = l2;
  let sum;
  let x;
  let y;
  let newNode;
  while (pointer1 !== null || pointer2 !== null) {
    x = pointer1 !== null ? pointer1.val : 0;
    y = pointer2 !== null ? pointer2.val : 0;
    sum = x + y + carry;
    carry = Math.floor(sum / 10);
    newNode = new ListNode(sum % 10);
    current.next = newNode;
    current = current.next;
    if (pointer1) pointer1 = pointer1.next;
    if (pointer2) pointer2 = pointer2.next;
  }
  if (carry === 1) current.next = new ListNode(carry);
  return newListHead.next;
}
