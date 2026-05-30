/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        
        if(head === null) return head;

        let  prevNode = null;
        let currentNode = head;
        let nextNode = head.next;

        while(currentNode !== null) {
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;

            if(currentNode !== null) nextNode = currentNode.next;
        }

        return prevNode
    }
}
