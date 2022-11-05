/**
LeetCode: https://leetcode.com/problems/binary-search/description/

Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
*/

class Solution {
    public int search(int[] nums, int target) {
        int start=0, end=nums.length-1;
        int mid=0;
        while(start<end){
            mid = (start+end)/2;
            if(target<nums[mid])
                end = mid-1;
            else if(nums[mid]<target)
                start = mid+1;
            else
                return mid;
        }
        if(start==end && nums[start]==target)
            return start;
            
        return -1;
    }
}
