/*
LeetCode: https://leetcode.com/problems/count-good-nodes-in-binary-tree/

Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

Return the number of good nodes in the binary tree.

 

Example 1:

Input: root = [3,1,4,3,null,1,5]
Output: 4
Explanation: Nodes in blue are good.
Root Node (3) is always a good node.
Node 4 -> (3,4) is the maximum value in the path starting from the root.
Node 5 -> (3,4,5) is the maximum value in the path
Node 3 -> (3,1,3) is the maximum value in the path.

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const goodNodes = function(root) {
    
    function dfs(node, maxVal) {
        if(!node)
            return 0

        let count = node.val >= maxVal ? 1 : 0;
        maxVal = node.val > maxVal ? node.val : maxVal;
        count += dfs(node.left, maxVal);
        count += dfs(node.right, maxVal);
        return count;
    }
    
    return dfs(root, root.val);
};

/* Explanation
      3         -> valid root
    1   4       -> 4 > 3(previous node value) -> 4 become the maxValue - return 1 | 1 > 3 -> not valid - return 0
  3    1  5     -> 5 > 4 -> 5 maxValue  | 1 > 4 - return 1 -> not a valid value - return 0
        
  result = 1 (root) + 1 (left nodes valid) + 2 (right nodes valid) = 4

  the dfs function runs recursively until the node is null, otherwise it returns 0.
*/
