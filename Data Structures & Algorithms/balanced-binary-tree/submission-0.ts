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
    balanced(root: TreeNode | null, bool: boolean[]): number {
        if(root === null) return 0;

        let leftDepth = this.balanced(root.left, bool);
        let rightDepth = this.balanced(root.right, bool);

        if(Math.abs(leftDepth - rightDepth) <= 1) {
            bool[0] = bool[0] && true;
        } else {
            bool[0] = bool[0] && false;
        }

        return Math.max(leftDepth, rightDepth) + 1;
    }
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root: TreeNode | null): boolean {

        let bool = new Array<boolean>();
        bool[0] = true;
        this.balanced(root, bool);
        return bool[0];
    }
}
