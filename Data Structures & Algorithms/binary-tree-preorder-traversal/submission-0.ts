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
    traversal(node: TreeNode, array: number[]): void {
        if(node === null) return;

        array.push(node.val);
        this.traversal(node.left, array);
        this.traversal(node.right, array);
    }
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    preorderTraversal(root: TreeNode | null): number[] {
        let array = new Array<number>();
        this.traversal(root, array);
        return array;
    }
}
