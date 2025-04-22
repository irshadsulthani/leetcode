/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
 if (!head || !head.next || k < 2) return head;

  let dummy = new ListNode(-1, head);
  let prev = dummy;
  let curr = head;
  while (curr) {
    prev.next = reverseList(prev, curr, k);
    let next = curr.next;
    prev = curr;
    curr = next;
  }
  return dummy.next;
};

const reverseList = (prevNode, currNode, k) => {
  if (!currNode.next) return currNode;
  //check whether this list meets k nodes
  let count = 0;
  let pointer = currNode;
  while (count < k && pointer) {
    pointer = pointer.next;
    count++;
  }
  if (count < k) return currNode;

//if you have k nodes to reverse, it only takes k-1 times of operations
  while (k-1 > 0) {
    let nextNode = currNode.next;
    currNode.next = nextNode.next;
    nextNode.next = prevNode.next;
    prevNode.next = nextNode;
	k--;
  }
  return prevNode.next;
};
