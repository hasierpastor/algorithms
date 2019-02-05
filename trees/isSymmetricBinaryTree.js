// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
// But the following [1,2,2,null,3,null,3] is not:
//     1
//    / \
//   2   2
//    \   \
//    3    3

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

function isSymmetric(root) {
  return isSymmetricHelper(root, root);
}

function isSymmetricHelper(t1, t2) {
  if (t1 == null && t2 == null) {
    return true;
  }
  if (t1 == null || t2 == null) {
    return false;
  }
  return (
    t1.val == t2.val &&
    isSymmetricHelper(t1.left, t2.right) &&
    isSymmetricHelper(t1.right, t2.left)
  );
}
