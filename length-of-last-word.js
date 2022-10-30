/*
LeetCode: https://leetcode.com/problems/length-of-last-word/

Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

 

Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
*/

// with js api
const lengthOfLastWord = (s) => s.trim().split(" ").pop().length;

// without built-in methods
var lengthOfLastWord = function(s) {
    let i = s.length - 1;
    let letterCount = 0;
    while(i >= 0){
        if(s[i] == ' ' && letterCount > 0){
            return letterCount;
        } else if(s[i] != ' '){
            letterCount++;
        }
        i--;
    }
    
    return letterCount;
};
