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
    hasSum(root: TreeNode | null, targetSum: number, prevSum: number): boolean {
        if(root === null) return false;

        let currentSum = prevSum + root.val;
        if(currentSum === targetSum && (root.left === null && root.right === null)) return true;

        if(this.hasSum(root.left, targetSum, currentSum)) return true;
        if(this.hasSum(root.right, targetSum, currentSum)) return true;

        return false;
    }
    /**
     * @param {TreeNode} root
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root: TreeNode | null, targetSum: number): boolean {
        return this.hasSum(root, targetSum, 0);
    }
}
