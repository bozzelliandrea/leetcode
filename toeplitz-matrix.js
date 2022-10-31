/*
LeetCode: https://leetcode.com/problems/toeplitz-matrix/

Given an m x n matrix, return true if the matrix is Toeplitz. Otherwise, return false.

A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same elements.

Input: matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
Output: true
Explanation:
In the above grid, the diagonals are:
"[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]".
In each diagonal all elements are the same, so the answer is True.


Complexity Analysis

Time Complexity: O(M*N) where M is rows number and N col size.

Space Complexity: O(1).

*/

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {

    for(let row=0; row < matrix.length; row++) {
        for(let col=0; col < matrix[row].length; col++) {
            if(matrix[row+1] != undefined 
               && matrix[row+1][col+1] != undefined 
               && matrix[row][col] != matrix[row+1][col+1])
                return false;
        }
    }
    
    
    return true
};
