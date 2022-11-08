/**
LeetCode: https://leetcode.com/problems/climbing-stairs/description
Video Explanation: https://www.youtube.com/watch?v=Y0lT9Fck7qI&ab_channel=NeetCode

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let one = 1, two = 1; 

    for(let i = 0; i < n - 1; i++) {
        let tmp = one;
        one = one + two; 
        two = tmp;
    }

    return one;
};
