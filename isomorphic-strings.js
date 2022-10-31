/*
LeetCode: https://leetcode.com/problems/isomorphic-strings/

Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
*/

function getByValue(map, searchValue) {
  for (let [key, value] of map.entries()) {
    if (value === searchValue)
      return key;
  }
}
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isIsomorphic(s, t) {
    this.dict = new Map();
    
    for(let i=0; i<s.length; i++){
        if(this.dict.get(s[i])) {
            if(this.dict.get(s[i]) != t[i]) {
                return false;
            }
        }
        else {
            if(getByValue(this.dict, t[i])) {
                return false;
            }
            else {
                this.dict.set(s[i],t[i]);
            }
        }
    }
    return true;
};
