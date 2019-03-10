/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
  if (n === 0) return head;
  let current = head;
  let length = 0;
  let position = 0;
  while (current !== null) {
    length++;
    current = current.next;
  }
  if (n > 0 && length === 1) return null;
  let nodePosition = length - n;
  let newCurr = head;
  while (newCurr !== null) {
    if (position === nodePosition) {
      newCurr.next = newCurr.next.next;
    }
    position++;
    newCurr = newCurr.next;
  }
  return head;
}
