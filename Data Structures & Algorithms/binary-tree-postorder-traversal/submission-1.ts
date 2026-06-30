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

        this.traversal(node.left, array);
        this.traversal(node.right, array);
        array.push(node.val);
    }
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    postorderTraversal(root: TreeNode | null): number[] {
        let array = new Array<number>();
        this.traversal(root, array);
        return array;
    }
}
