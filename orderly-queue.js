/**
LeetCode: https://leetcode.com/problems/orderly-queue/description/
Solution: https://leetcode.com/problems/orderly-queue/solutions/1446243/

You are given a string s and an integer k. You can choose one of the first k letters of s and append it at the end of the string..

Return the lexicographically smallest string you could have after applying the mentioned step any number of moves.
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const orderlyQueue = function(s, k) {
    if(k > 1) return s.split("").sort().join("");
    let res = s;
    
    for(let i = 0; i < s.length; i++) {
        s = s.slice(1) + s[0];
        res = res.localeCompare(s) < 0? res:s;
    }
    
    return res;
};
