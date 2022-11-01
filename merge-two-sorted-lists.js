/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    
    let head = new ListNode();
    let ll = head;
    
    while(list1 || list2) {
        
        if(!list2 || (list1 && list1.val <= list2.val)) {
            head.next = list1;
            list1 = list1.next;
        } else {
            head.next = list2;
            list2 = list2.next;
        }
        
        head = head.next;
    }
    
    return ll.next;
};


// mix and match
var mergeTwoLists = function(l1, l2) {
    if(!l1 || !l2) return l1 || l2
    
    if(l1.val > l2.val){
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
    }
    l1.next = mergeTwoLists(l2, l1.next)
    return l1
};
