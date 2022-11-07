/**
LeetCode: https://leetcode.com/problems/number-of-islands/description

Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

 * @param {character[][]} grid
 * @return {number}
 */
function numIslands(grid) {
	let count = 0;
	
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if (grid[i][j] == '1') {
				count += 1;
				dfs(grid, i, j);
			}
		}
	}
	
	return count;
};

function dfs(grid, i, j) {
		if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] == '0') {
			return;
		}
		
		grid[i][j] = '0';
		
		dfs(grid, i + 1, j); // down
		dfs(grid, i - 1, j); // up
		dfs(grid, i, j + 1); // right
		dfs(grid, i, j - 1); // left
	}
