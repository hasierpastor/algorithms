/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function rightSideView(root) {
  if (!root) return [];
  let result = [];
  let queue = [root];
  while (queue.length) {
    let level = [];
    let levelLength = queue.length;
    for (let i = 0; i < levelLength; i++) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      level.push(node);
    }
    let right = level.pop();
    result.push(right.val);
  }

  return result;
}
