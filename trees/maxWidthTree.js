/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

//not taking into account null values
function widthOfBinaryTree(root) {
  let maxWidth = -Infinity;
  let queue = [root];
  let level = 1;
  let height = maxDepth(root);
  while (level <= height) {
    let width = queue.length;
    maxWidth = Math.max(width, maxWidth);
    let node = queue.shift();
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
    level++;
  }
  return maxWidth;
}

function maxDepth(root) {
  if (!root) return 0;
  else if (!root.left && !root.right) return 1;
  else if (!root.left) return maxDepth(root.right) + 1;
  else if (!root.right) return maxDepth(root.left) + 1;
  else {
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
  }
}
