/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  
    if (!root) {
        return new TreeNode(val) // only call when original root is null
    }
    
    if (root.val > val) {
        // look for insert in left subtree 
        if (!root.left) {
            root.left = new TreeNode(val)
        } else {
            insertIntoBST(root.left, val)   
        }
    }
    
    if (root.val < val) {
        // look for insert in right subtree
        if (!root.right) {
            root.right = new TreeNode(val)
        } else {
            insertIntoBST(root.right, val)   
        }
    }
    
    
    return root
};
