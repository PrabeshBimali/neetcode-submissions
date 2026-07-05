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
     * @return {number[]}
     */
    rightSideView(root: TreeNode | null): number[] {
        const answer = new Array<number>();
        if(root === null) return answer;

        const q = new Queue();
        q.enqueue(root);

        while(!q.isEmpty()) {
            answer.push(q.back().val);
            const size = q.size();

            for(let i = 0; i < size; i++) {
                const current = q.dequeue();
                if(current.left) q.enqueue(current.left);
                if(current.right) q.enqueue(current.right);
            }

        }

        return answer;
    }
}
