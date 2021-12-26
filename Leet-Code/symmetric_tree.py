# SYMMETRIC TREE

# Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).


# Example 1:


# Input: root = [1,2,2,3,4,4,3]
# Output: true
# Example 2:


# Input: root = [1,2,2,null,3,null,3]
# Output: false

# Constraints:

# The number of nodes in the tree is in the range [1, 1000].
# -100 <= Node.val <= 100

# Solution

# Time Complexity --> 0(n)
# Space Complexity --> 0(n)

# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def isSymmetric(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """
        if not root:
            return True

        def check_symmetry(left_node, right_node):
            if (not left_node) and (not right_node):
                return True
            if (not left_node):
                return False
            if (not right_node):
                return False
            if (left_node.val != right_node.val):
                return False

            return check_symmetry(left_node.left, right_node.right) and check_symmetry(left_node.right, right_node.left)

        return check_symmetry(root.left, root.right)