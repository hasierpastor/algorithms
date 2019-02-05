// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// Example:
//Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

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

function mergeTwoLists(l1, l2) {
  let node = new ListNode(-1);
  let previous = node;
  while (l1 !== null && l2 !== null) {
    if (l1.val >= l2.val) {
      previous.next = l2;
      l2 = l2.next;
    } else {
      previous.next = l1;
      l1 = l1.next;
    }
    previous = previous.next;
  }
  previous.next = l1 === null ? l2 : l1;

  return node.next;
}
