// Write a program to find the node at which the intersection of two singly linked lists begins.
// Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
// Output: Reference of the node with value = 8
// Input Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect). From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,0,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

let getIntersectionNode = function(headA, headB) {
  let currentA = headA;
  let currentB = headB;
  let lengthA = 0;
  let lengthB = 0;
  let lengthDiff;
  while (currentA !== null) {
    currentA = currentA.next;
    lengthA++;
  }
  while (currentB !== null) {
    currentB = currentB.next;
    lengthB++;
  }
  if (lengthA > lengthB) {
    lengthDiff = lengthA - lengthB;
    let count = 0;
    while (count < lengthDiff) {
      headA = headA.next;
      count++;
    }
  }
  if (lengthB > lengthA) {
    lengthDiff = lengthB - lengthA;
    let count = 0;
    while (count < lengthDiff) {
      headB = headB.next;
      count++;
    }
  }
  let pointerA = headA;
  let pointerB = headB;
  while (pointerA !== pointerB) {
    pointerA = pointerA.next;
    pointerB = pointerB.next;
  }
  return pointerA;
};
