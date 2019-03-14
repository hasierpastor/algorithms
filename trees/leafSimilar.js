function leafSimilar(root1, root2) {
  let leaves1 = dfs(root1);
  let leaves2 = dfs(root2);
  if (leaves1.length !== leaves2.length) return false;
  for (let i = 0; i < leaves1.length; i++) {
    if (leaves1[i] !== leaves2[i]) return false;
  }
  return true;
}

function dfs(root, arr = []) {
  if (root !== null) {
    dfs(root.left, arr);
    if (!root.left && !root.right) arr.push(root.val);
    dfs(root.right, arr);
  }
  return arr;
}
