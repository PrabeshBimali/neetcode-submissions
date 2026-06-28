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

    private merge(list1: ListNode, list2: ListNode): ListNode {
        if (list1 === null) return list2;
        if (list2 === null) return list1;

        if (list1.val < list2.val) {
            list1.next = this.merge(list1.next, list2);
            return list1;
        } else {
            list2.next = this.merge(list1, list2.next);
            return list2;
        }
    }

    private mergeSort(lists: ListNode[], left: number, right: number): ListNode {
        if(left >= right) {
            return lists[left];
        }

        let mid = Math.floor((left + right)/2);
        let list1 = this.mergeSort(lists, left, mid);
        let list2 = this.mergeSort(lists, mid+1, right);

        let merged = this.merge(list1, list2);
        return merged;  
    }
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists: ListNode[]): ListNode {
        let result = this.mergeSort(lists, 0, lists.length - 1);
        return (result === undefined ? null : result);
    }
}
