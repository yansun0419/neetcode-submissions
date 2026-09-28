/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root: TreeNode | null): number {
        let maxDiameter = 0;

        const height = (root: TreeNode | null): number => {
            if(!root) {return 0;}
            const hl=height(root.left),hr=height(root.right);
            maxDiameter = Math.max(maxDiameter, hl+hr);
            return Math.max(hl,hr)+1;
        }

        height(root);
        return maxDiameter;
    }
}
