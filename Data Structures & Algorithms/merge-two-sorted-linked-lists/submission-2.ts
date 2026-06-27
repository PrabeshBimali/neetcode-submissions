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
        if(list1 === null && list2 === null) return null;
    
        let current = new ListNode();

        if(list1 === null) {
            current.val = list2.val;
            current.next = this.mergeTwoLists(null, list2.next);
        } else if(list2 === null) {
            current.val = list1.val;
            current.next = this.mergeTwoLists(list1.next, null);    
        } else {
            if(list1.val < list2.val) {
                current.val = list1.val;
                current.next = this.mergeTwoLists(list1.next, list2); 
            } else {
                current.val = list2.val;
                current.next = this.mergeTwoLists(list1, list2.next);
            }
        }

        return current;
    }
}
