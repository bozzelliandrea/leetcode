/**
LeetCode: https://leetcode.com/problems/reverse-vowels-of-a-string/description/

Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
 

Example 1:

Input: s = "hello"
Output: "holle"


Solution: two pointers algorithm
*/
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let left = 0, right = s.length-1
    let res = ''
    
    while(left<s.length) {
        if(!hasVowel(s[left])) {
            res += s[left]
            left++
        }    
        else if(hasVowel(s[right])) {
            res += s[right]
            right--
            left++
        }
        else right--
    }
    
    return res
};

function hasVowel(c) {
    return c == 'a' || c == 'i' || c == 'e' || c == 'o' || c == 'u'
            || c == 'A' || c == 'I' || c == 'E' || c == 'O' || c == 'U';
}
