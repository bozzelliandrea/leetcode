/**
LeetCode: https://leetcode.com/problems/n-ary-tree-preorder-traversal

Given the root of an n-ary tree, return the preorder traversal of its nodes' values.

Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)
Input: root = [1,null,3,2,4,null,5,6]
Output: [1,3,5,6,2,4]

Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    
    if(root) {
        let n = [root.val];
        for(const node of root.children)
            n.push(...preorder(node));

        return n;
    }

    return [];
};
