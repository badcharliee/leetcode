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

function pruneTree(root: TreeNode | null): TreeNode | null {
    return getMax(root) ? root : null
};

function getMax(root: TreeNode | null): number {
    if (!root) {
        return 0    
    }
    
    if (!root.left && !root.right) {
        return root.val
    }
    
    if (root.left && root.right) {
        const leftMax = getMax(root.left)
        const rightMax = getMax(root.right)
        
        if (!leftMax) {
            root.left = null
        }
        
        if (!rightMax) {
            root.right = null
        }
        
        return Math.max(
            root.val, 
            Math.max(leftMax, rightMax)
        )
    }
    
    if (root.left) {
        const max = getMax(root.left)
        if (!max) {
            root.left = null
        }
        
        return Math.max(root.val, max)
    }
    
    if (root.right) {
        const max = getMax(root.right)
        if (!max) {
            root.right = null
        }
        
        return Math.max(root.val, max)
    }
}
