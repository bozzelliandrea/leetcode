# LeetCode: https://leetcode.com/problems/linked-list-cycle-ii/

# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def detectCycle(self, head):
        cur = head
        lookup = set()
        
        while cur:
            if cur in lookup: return cur
            lookup.add(cur)
            cur = cur.next
            
        return None
        
