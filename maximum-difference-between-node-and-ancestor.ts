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

function maxAncestorDiff(root: TreeNode | null): number {
    return getMinMax(root).maxDiff
};

interface MinMax {
    min: number;
    max: number;
    maxDiff: number;
}

function getMinMax(root: TreeNode | null): MinMax {    
    if (!root.left && !root.right) {
        return {
            min: root.val,
            max: root.val,
            maxDiff: 0
        }
    }
    
    if (root.left && root.right) {
        const leftMinMax = getMinMax(root.left)
        const rightMinMax = getMinMax(root.right)
        const diffLeft = Math.max(
            Math.abs(root.val - leftMinMax.min),
            Math.abs(root.val - leftMinMax.max),
        )
        const diffRight = Math.max(
            Math.abs(root.val - rightMinMax.min),
            Math.abs(root.val - rightMinMax.max),
        )
        const maxDiffLeftRight = Math.max(leftMinMax.maxDiff, rightMinMax.maxDiff)
        return {
            min: Math.min(leftMinMax.min, rightMinMax.min, root.val),
            max: Math.max(leftMinMax.max, rightMinMax.max, root.val),
            maxDiff: Math.max(
                Math.max(maxDiffLeftRight, diffLeft), 
                Math.max(maxDiffLeftRight, diffRight),
            )
        }
    }
    
    if (!root.left) {
        const rightMinMax = getMinMax(root.right)
        const diffRight = Math.max(
            Math.abs(root.val - rightMinMax.min),
            Math.abs(root.val - rightMinMax.max)
        )
        return {
            min: Math.min(rightMinMax.min, root.val),
            max: Math.max(rightMinMax.max, root.val),
            maxDiff: Math.max(diffRight, rightMinMax.maxDiff)
        }
    }
    
    if (!root.right) {
        const leftMinMax = getMinMax(root.left)
        const diffLeft = Math.max(
            Math.abs(root.val - leftMinMax.min),
            Math.abs(root.val - leftMinMax.max)
        )
        return {
            min: Math.min(leftMinMax.min, root.val),
            max: Math.max(leftMinMax.max, root.val),
            maxDiff: Math.max(diffLeft, leftMinMax.maxDiff)
        }
    }
}
