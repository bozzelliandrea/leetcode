/**
LeetCode: https://leetcode.com/problems/validate-binary-search-tree/description
Video Explanation: https://www.youtube.com/watch?v=s6ATEkipzow&ab_channel=NeetCode

Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left 
subtree
 of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

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
 * @return {boolean}
 */
var isValidBST = function(root) {
    
    function validate(node, left, right) {
        if(!node) 
            return true;

        if(!(node.val < right && node.val > left))
            return false;

        return validate(node.left, left, node.val) && validate(node.right, node.val, right);
    }

    return validate(root, -Infinity, Infinity);
};
