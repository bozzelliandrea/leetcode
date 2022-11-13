/**
LeetCode: https://leetcode.com/problems/reverse-words-in-a-string/description/

Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

 

Example 1:

Input: s = "the sky is blue"
Output: "blue is sky the"
*/

// Pure Solution

var reverseWords = function(s) {
    let word = null, result = null;

    for(let i = s.length - 1; i >= 0; i--) {
        if(s.charAt(i) !== ' ') {
            word = word !== null ? s.charAt(i) + word : s.charAt(i);
        }
        if((word != null && s.charAt(i) === ' ') || (word != null && i == 0)) {
            result = result != null ? result + ' ' + word : word;
            word = null;
        }
    }

    return result;
}


// JS API Solution

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.replace(/\s+/g, '#').split('#').reverse().join(' ').trim();
};
