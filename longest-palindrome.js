/**
LeetCode: https://leetcode.com/problems/longest-palindrome/

Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

 

Example 1:

Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
Example 2:

Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.
*/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    
    const dict = new Map();
    let count = 0;
    let odd = 0;
    
    for(let i=0; i<s.length; i++) {
        dict.set(s[i], dict.get(s[i]) ? dict.get(s[i]) + 1 : 1);
    }
    
    if(dict.size == 1) {
        return dict.get(dict.keys().next().value)
    }
    
    
    dict.forEach((value) => {
            if(value % 2 == 0) {
                count += value
            } else {
                if(value > 1)
                    count += value - 1;
                odd += 1
            }
    })
    
    
    return odd > 0 ? count + 1 : count
    
};
