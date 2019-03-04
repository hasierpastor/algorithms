// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let llHead = TreeNode(null);
let llTail = TreeNode(null);

function createDoublyLL(root) {
  if (root === null) return null;
  if (root.left === null && root.right === null) {
    if (llHead !== null) {
      llHead = root;
      llTail = root;
    } else {
      llTail.right = root;
      root.left = llTail;
      llTail = root;
    }
    return null;
  }
  root.right = createDoublyLL(root.right);
  root.left = createDoublyLL(root.left);
  return root;
}

let testRoot = new TreeNode(1);
testRoot.left = new TreeNode(2);
testRoot.right = new TreeNode(3);
testRoot.left.left = new TreeNode(4);
testRoot.left.right = new TreeNode(5);
testRoot.right.right = new TreeNode(6);
testRoot.left.left.left = new TreeNode(7);
testRoot.left.left.right = new TreeNode(8);
testRoot.right.right.left = new TreeNode(9);
testRoot.right.right.right = new TreeNode(10);

console.log(createDoublyLL(testRoot));
