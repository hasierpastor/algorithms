// Remove all elements from a linked list of integers that have value val.

// Example:

// Input:  1->2->6->3->4->5->6, val = 6
// Output: 1->2->3->4->5

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 *
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

let removeElements = function(head, val) {
  let ll = head;
  if (head.val == val) {
    return head.next;
  }
  while (ll.next !== null) {
    if (ll.next.val == val) {
      ll.next = ll.next.next;
      return head;
    }
    ll = ll.next;
  }
  return head;
};
