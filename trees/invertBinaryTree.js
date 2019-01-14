// Invert a binary tree.

// Example:

// Input:

//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// Output:

//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

let invertTree = function(root) {
  if (!root) return null;
  if (root === null) return;
  [root.left, root.right] = [root.right, root.left];
  invertTree(root.right);
  invertTree(root.left);
  return root;
};
