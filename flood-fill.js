/**
LeetCode: https://leetcode.com/problems/flood-fill/description

An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

Return the modified image after performing the flood fill.

Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.

 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
function floodFill(image, sr, sc, color) {
    if(image.length === 0)
       return image;

    if(image[sr][sc] === color)
       return image;

    dfs(image, sr, sc, image[sr][sc], color);
    return image;
};

function dfs(image, sr, sc, oldColor, newColor) {
    if(sr < 0 || sc < 0 || sr >= image.length || sc >= image[0].length)
        return;


    if(image[sr][sc] == oldColor)
        image[sr][sc] = newColor;
    else
        return;
    
    dfs(image, sr + 1, sc, oldColor, newColor);
    dfs(image, sr - 1, sc, oldColor, newColor);
    dfs(image, sr, sc + 1, oldColor, newColor);
    dfs(image, sr, sc - 1, oldColor, newColor);
}
