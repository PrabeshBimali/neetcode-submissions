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
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        const answer = new Array<Array<number>>();
        if(root === null) return answer;
        const q = new Queue();
        q.enqueue(root);

        while(!q.isEmpty()) {
            const arr = new Array<number>();
            const currentLen = q.size();
            for(let i = 0; i < currentLen; i++) {
                let current = q.dequeue();
                arr.push(current.val);

                if(current.left) q.enqueue(current.left);
                if(current.right) q.enqueue(current.right);
            }

            answer.push(arr);
        }

        return answer;
    }
}
