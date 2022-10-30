/*
LeetCode: https://leetcode.com/problems/search-insert-position/

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
*/

/**
 * Binary Search with O(log n)
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
    let index = 0;
    
    for(let i=0, j=nums.length-1; i < (nums.length / 2); i++,j--) {
        if(nums[i] == target)
            return i;
        if(nums[j] == target)
            return j;
        if(target > nums[j])
            return j + 1
        if(target > nums[i] && target < nums[j])
            index = i + 1;
    }
    return index;
};
