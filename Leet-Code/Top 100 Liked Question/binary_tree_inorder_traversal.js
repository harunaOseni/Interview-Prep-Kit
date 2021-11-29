// BINARY TREE INORDER TRAVERSAL

// Given the root of a binary tree, return the inorder traversal of its nodes' values.

// Example 1:

// Input: root = [1,null,2,3]
// Output: [1,3,2]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [1]
// Output: [1]
// Example 4:

// Input: root = [1,2]
// Output: [2,1]
// Example 5:

// Input: root = [1,null,2]
// Output: [1,2]

// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

// Time complexity (Big 0(n))
// Space Complexity (Big 0(n))

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let node = root;

  if (!node) {
    return [];
  }

  let stack = [];
  let inorderTravResult = [];

  while (node || stack.length) {
    while (node) {
      stack.push(node);
      node = node.left;
    }

    node = stack.pop();
    inorderTravResult.push(node.val);
    node = node.right;
  }

  return inorderTravResult;
};
