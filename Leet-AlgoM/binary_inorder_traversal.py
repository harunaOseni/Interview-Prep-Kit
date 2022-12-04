# BINARY INORDER TRAVERSAL

# Given the root of a binary tree, return the inorder traversal of its nodes' values.


# Example 1:

# Input: root = [1,null,2,3]
# Output: [1,3,2]
# Example 2:

# Input: root = []
# Output: []
# Example 3:

# Input: root = [1]
# Output: [1]
# Example 4:


# Input: root = [1,2]
# Output: [2,1]
# Example 5:


# Input: root = [1,null,2]
# Output: [1,2]

# Constraints:

# The number of nodes in the tree is in the range [0, 100].
# -100 <= Node.val <= 100

# Time Complexity ---> 0(n)
# Space Complexity ---> 0(n)


# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def inorderTraversal(self, root):
        """
        :type root: TreeNode
        :rtype: List[int]
        """
        resultTrav = []

        def trav(node):
            if not node:
                return
            trav(node.left)
            resultTrav.append(node.val)
            trav(node.right)

        trav(root)
        return resultTrav


# without a helper function recursive
def inorderTraversal(self, root):
    res = []
    if root:
        res = self.inorderTraversal(root.left)
        res.append(root.val)
        res = res + self.inorderTraversal(root.right)
    return res
