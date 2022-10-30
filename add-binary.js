/*
LeetCode: https://leetcode.com/problems/add-binary/

Given two binary strings a and b, return their sum as a binary string.

 

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let aIdx = a.length - 1;
    let bIdx = b.length - 1;
    
    let res = "";
    let carry = 0;
    
    while (a[aIdx] || b[bIdx]) {
        let sum = carry;
        
        if (a[aIdx]) 
            sum += parseInt(a[aIdx--]);
        if (b[bIdx]) 
            sum += parseInt(b[bIdx--]);
        
        res = (sum % 2) + res;
        carry = Math.floor(sum / 2);
    }
    
    if(carry)
        res = carry + res;
    
    return res;
};
