function isSubtree(s, t) {
  if (s === null) return true;
  if (t === null) return false;
  if (sameTree(s, t)) {
    return true;
  }
  return isSubtree(s, t.left) || isSubtree(s, t.right);
}

function sameTree(root1, root2) {
  if (root1 === null && root2 === null) return true;
  if (root1 === null || root2 === null) return false;
  if (root1.val !== root2.val) return false;
  return sameTree(root1.right, root2.right) && sameTree(root1.left, root2.left);
}
