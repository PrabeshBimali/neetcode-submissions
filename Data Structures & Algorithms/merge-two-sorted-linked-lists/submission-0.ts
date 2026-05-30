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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */

    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        let dummy = new ListNode();
        let tail = dummy;
        let current1 = list1;
        let current2 = list2;

        while(current1 !== null && current2 !== null) {
            if(current1.val <= current2.val) {
                tail.next = current1;
                tail = tail.next;
                current1 = current1.next
            } else {
                tail.next = current2;
                tail = tail.next;
                current2 = current2.next
            }
        }

        if(current1 !== null) {
            tail.next = current1;
        } else if(current2 !== null) {
            tail.next = current2;
        }

        return dummy.next
    }
}
