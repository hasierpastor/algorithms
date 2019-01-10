// Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

// You should preserve the original relative order of the nodes in each of the two partitions.

// Example:

// Input: head = 1->4->3->2->5->2, x = 3
// Output: 1->2->2->4->3->5

// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

// @param {ListNode} head
// @param {number} x
// @return {ListNode}

let partition = function(head, x) {
  if (!head) return null;
  let least = new ListNode(null);
  let less = new ListNode(null);
  let greatest = new ListNode(null);
  let greater = new ListNode(null);

  let traverse = head;

  while (traverse != null) {
    if (traverse.val < x) {
      if (least == null) {
        least = traverse;
        less = least;
      } else {
        less.next = traverse;
        less = less.next;
      }
    } else {
      if (greatest == null) {
        greatest = traverse;
        greater = greatest;
      } else {
        greater.next = traverse;
        greater = greater.next;
      }
    }
    traverse = traverse.next;
  }

  if (least == null) {
    return greatest;
  } else if (greatest == null) {
    return least;
  }

  greater.next = null;
  less.next = greatest;

  return least;
};
