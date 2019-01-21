// Given a singly linked list, determine if it is a palindrome.

// Example 1:

// Input: 1->2
// Output: false
// Example 2:

// Input: 1->2->2->1
// Output: true

//  Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */

var isPalindrome = function(head) {
  let reverse = reverseCloneLL(head);
  let pointer1 = head;
  let pointer2 = reverse;
  while (pointer1 !== null && pointer2 !== null) {
    if (pointer1.val !== pointer2.val) {
      return false;
    }
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }
  return true;
};

function reverseCloneLL(node) {
  let reversedList = null;
  let current = node;
  while (current !== null) {
    let newNode = new ListNode(current.val);
    newNode.next = reversedList;
    reversedList = newNode;
    current = current.next;
  }
  return reversedList;
}
