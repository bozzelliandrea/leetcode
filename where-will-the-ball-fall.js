/*
LeetCode: https://leetcode.com/problems/where-will-the-ball-fall/submissions/

You have a 2-D grid of size m x n representing a box, and you have n balls. The box is open on the top and bottom sides.

Each cell in the box has a diagonal board spanning two corners of the cell that can redirect a ball to the right or to the left.

A board that redirects the ball to the right spans the top-left corner to the bottom-right corner and is represented in the grid as 1.
A board that redirects the ball to the left spans the top-right corner to the bottom-left corner and is represented in the grid as -1.
We drop one ball at the top of each column of the box. Each ball can get stuck in the box or fall out of the bottom. A ball gets stuck if it hits a "V" shaped pattern between two boards or if a board redirects the ball into either wall of the box.

Return an array answer of size n where answer[i] is the column that the ball falls out of at the bottom after dropping the ball from the ith column at the top, or -1 if the ball gets stuck in the box.

Input: grid = [[1,1,1,-1,-1],[1,1,1,-1,-1],[-1,-1,-1,1,1],[1,1,1,1,-1],[-1,-1,-1,-1,-1]]
Output: [1,-1,-1,-1,-1]
Explanation: This example is shown in the photo.
Ball b0 is dropped at column 0 and falls out of the box at column 1.
Ball b1 is dropped at column 1 and will get stuck in the box between column 2 and 3 and row 1.
Ball b2 is dropped at column 2 and will get stuck on the box between column 2 and 3 and row 0.
Ball b3 is dropped at column 3 and will get stuck on the box between column 2 and 3 and row 0.
Ball b4 is dropped at column 4 and will get stuck on the box between column 2 and 3 and row 1.

*/
/**
[1,1,1,-1,-1]       1  = \ left to right
[1,1,1,-1,-1]       -1 = / right to left
[-1,-1,-1,1,1]
[1,1,1,1,-1]
[-1,-1,-1,-1,-1]
*/

/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function(grid) 
{
    const rows = grid.length, cols = grid[0].length;

    const getPosition = function(row, col)
    {
        if(grid[row][col] === 1)
        {
            if(col === cols-1 || grid[row][col+1] === -1)
                return -1;
            return col+1;
        }
        else
        {
            if(col === 0 || grid[row][col-1] === 1)
                return -1;
            return col-1;
        }
    };

    let result = [];
    for(let col=0; col<cols; col++)
    {
        let pos = col;
        for(let row=0; row<rows; row++)
        {
            pos = getPosition(row, pos);
            if(pos === -1)
                break;
        }
        result.push(pos);
    }
    
    return result;
};
