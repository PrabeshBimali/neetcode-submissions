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

    // a: {val: 1, next: b}
    // b: {val:2, next: c}
    // c: {val: 3, next: null}

    // initial
    // pn = null, cn = a, nn = b

    // iteration 1
    // a: {val: 1, next: null}
    // pn = a, cn: b, nn: c

    // iteration 2
    // a: {val: 1, next: null}, b:{val: 2, next: a}
    // pn = b, cn: c, nn: null

    // iteration 3
    // a: : {val: 1, next: null}, b:{val:2, next: a}, c: {val: 3, next: b}
    // pn = c, cn: null, nn: null
}
