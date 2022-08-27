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

function invertTree(root: TreeNode | null): TreeNode | null {
    
    let leftChild = root ? root.left : null // get left child
    let rightChild = root ? root.right : null // get right child
    
    if (!root) {
        return null // nothing to invert
    }
        
    root.right = invertTree(leftChild)
    root.left = invertTree(rightChild)
    
    return root
};
