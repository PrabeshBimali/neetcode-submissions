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
    kthSmall(r: TreeNode | null, arr: number[]) {
        if (r === null) return;

        this.kthSmall(r.left, arr);
        arr.push(r.val);
        this.kthSmall(r.right, arr);
    }
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root: TreeNode | null, k: number): number {
        let arr: number[] = [];
        this.kthSmall(root, arr);
        return arr[k-1];
    }
}
