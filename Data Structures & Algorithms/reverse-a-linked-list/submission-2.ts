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

    reverse(current: ListNode | null, prev: ListNode | null): ListNode | null {
        if(current === null) return prev;

        let next = current.next;
        current.next = prev;
        prev = current;

        return this.reverse(next, prev);
}
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        return this.reverse(head, null);
    }
}
