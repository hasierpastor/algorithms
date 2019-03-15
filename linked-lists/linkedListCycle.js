// Given a linked list, determine if it has a cycle in it.

// To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.

// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where tail connects to the second node.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

function hasCycle(head) {
  if (!head) return false;
  let current = head;
  let seen = new Set();
  while (current != null) {
    if (seen.has(current)) {
      return true;
    } else {
      seen.add(current);
    }
    current = current.next;
  }
  return false;
}

function alternateCycle(head) {
  if (!head || !head.next) return false;

  let slow = head;
  let fast = head.next;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) return true;
  }

  return false;
}
