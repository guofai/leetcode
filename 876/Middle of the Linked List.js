/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    var fast=slow=head;
    var flag = 0;
    while(fast||(flag==2&&((slow = slow.next)&&(flag=0)))){
        if(flag < 2){fast = fast.next;flag++}
        else {slow = slow.next;flag = 0;}
    }
    return slow;
};

var middleNode = function(head) {
    let arr = [];
    let node = head;
    while (node !== null) {
        arr.push(node);
        node = node.next;
    }
    
    return arr[Math.floor(arr.length / 2)];
};