// SAME TREE

// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

// Example 1:

// Input: p = [1,2,3], q = [1,2,3]
// Output: true
// Example 2:

// Input: p = [1,2], q = [1,null,2]
// Output: false
// Example 3:

// Input: p = [1,2,1], q = [1,1,2]
// Output: false

// Constraints:

// The number of nodes in both trees is in the range [0, 100].
// -104 <= Node.val <= 104

var sameTree = function (tree1, tree2) {
  let leftTree1 = tree1.left;
  let rightTree1 = tree1.right;
  let leftTree2 = tree2.left;
  let rightTree2 = tree2.right;

  if (!tree1 && !tree2) {
    return true;
  } else if (!tree1 || !tree2) {
    return false;
  } else if (tree1.val != tree2.val) {
    return false;
  } else {
    return sameTree(leftTree1, leftTree2) && sameTree(rightTree1, rightTree2);
  }
};
