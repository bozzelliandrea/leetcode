# LeetCode: https://leetcode.com/problems/linked-list-cycle-ii/

# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def detectCycle(self, head):
        lookup = set()
        
        while head:
            if head in lookup: return head
            lookup.add(head)
            head = head.next
            
        return None
