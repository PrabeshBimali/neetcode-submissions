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
    areEqual(r: TreeNode | null, s: TreeNode | null) {
        if(r === null && s === null) return true;
        if(s === null) return false;
        if(r === null) return false;

        if(r.val !== s.val) return false;

        let left = this.areEqual(r.left, s.left);
        let right = this.areEqual(r.right, s.right);

        return left && right;
    }
    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
        if(root === null) return false;

        if(this.areEqual(root, subRoot)) return true;

        let left = this.isSubtree(root.left, subRoot);
        let right = this.isSubtree(root.right, subRoot);

        return left || right;
    }
}
