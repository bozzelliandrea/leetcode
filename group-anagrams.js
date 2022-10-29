/*

LeetCode: https://leetcode.com/problems/group-anagrams/

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    let res = {};
    
    for(let s of strs) {
        let sorted = s.split('').sort().join('');
        
        if(!res[sorted])
            res[sorted] = [];
        
        res[sorted].push(s);
        
    }
    
    return Object.values(res);
};
