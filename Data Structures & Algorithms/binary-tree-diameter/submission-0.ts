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
    diameter(root: TreeNode | null, array: number[]): number {
        if(root === null) return 0;

        let left = this.diameter(root.left, array);
        let right = this.diameter(root.right, array);

        if(left+right > array[0]) array[0] = left+right;

        return Math.max(left, right) + 1;
    }
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root: TreeNode | null): number {
        let diameters = new Array<number>();
        diameters[0] = 0;
        this.diameter(root, diameters);
        return diameters[0]

    }
}
