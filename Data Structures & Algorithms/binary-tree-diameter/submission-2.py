# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        diameter = 0

        def height(root: Optional[TreeNode]) -> int:
            if not root: return 0

            hl, hr = height(root.left), height(root.right)
            nonlocal diameter
            diameter = max(diameter, hl+hr)

            return max(hl, hr)+1

        height(root)

        return diameter