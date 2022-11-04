/**
LeetCode:

Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) {
        return []
    }
    
    let stack = [root]
    let levels = []
    
    while(stack.length) {
        const iterations = stack.length
        const levelValues = []
        
        for(let i = 0; i< iterations; i++) {
            var node = stack.shift()
            
            levelValues.push(node.val)
            
            if(node.left) {
                stack.push(node.left)
            }
            
            if(node.right) {
                stack.push(node.right)
            }
        }
        
        levels.push(levelValues)
    }
    
    return levels
};
