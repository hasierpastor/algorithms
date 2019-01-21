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

let inorderTraversal = function(root, nodes = []) {
  if (root !== null) {
    inorderTraversal(root.left, nodes);
    nodes.push(root.val);
    inorderTraversal(root.right, nodes);
  }
  return nodes;
};

let preorderTraversal = function(root, nodes = []) {
  if (root !== null) {
    nodes.push(root.val);
    preorderTraversal(root.left, nodes);
    preorderTraversal(root.right, nodes);
  }
  return nodes;
};

let postorderTraversal = function(root, nodes = []) {
  if (root !== null) {
    postorderTraversal(root.left, nodes);
    postorderTraversal(root.right, nodes);
    nodes.push(root.val);
  }
  return nodes;
};
