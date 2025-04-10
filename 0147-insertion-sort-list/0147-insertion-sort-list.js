/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
    let dummy = new ListNode(0); 

    while (head) {
        let next = head.next; 

        let current = dummy;
        while (current.next && current.next.val < head.val) {
            current = current.next;
        }

        head.next = current.next;
        current.next = head;

        head = next;
    }

    return dummy.next;

};