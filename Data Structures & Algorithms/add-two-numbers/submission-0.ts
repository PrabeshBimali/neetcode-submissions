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

    addNumber(l1: ListNode | null, l2: ListNode | null, carry: number): ListNode {
        const current = new ListNode();
        if((l1 === null || l2 === null) && carry === 0) {
            if(l1 === null) return l2;
            if(l2 === null) return l1;
        }
        
        let valL1 = (l1 === null) ? 0 : l1.val;
        let valL2 = (l2 === null) ? 0 : l2.val;
        let nextL1 = (l1 === null) ? null : l1.next;
        let nextL2 = (l2 === null) ? null : l2.next;

        let val = valL1 + valL2 + carry;
        carry = 0;

        if(val > 9) {
            carry = Math.floor(val/10);
            current.val = val%10;
        } else {
            current.val = val;
        }

        current.next = this.addNumber(nextL1, nextL2, carry);
        return current;
    } 
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode {
        return this.addNumber(l1, l2, 0);
    }
}
