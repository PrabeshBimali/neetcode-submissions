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
// can this be solved in O(1) space by simply returning value?
class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root: TreeNode | null, k: number): number {
        let stack = new Array<TreeNode>();
        let current = root;
        let index = 0;

        while(stack.length > 0 || current !== null) {
            while(current !== null) {
                stack.push(current);
                current = current.left;
            }

            while(true) {
                current = stack.pop();
                index += 1;
                if(index === k) return current.val;
                if(current.right !== null) break;
            }
            current = current.right;
        }

        return -1;
    }
}
