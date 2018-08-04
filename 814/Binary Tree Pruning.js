/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var pruneTree = function(root) {
    if(!root){return null;}
    if(root.left == null && root.right == null && root.val == 0){return null;}
    if(root.left == null && root.right == null && root.val == 1){return root;}
    else {
        root.left = pruneTree(pruneTree(root.left))?root.left:null;
        root.right = pruneTree(pruneTree(root.right))?root.right:null;
    }
    return root;
};

var pruneTree = function(root) {
    if(!!root.left) {
        root.left = pruneTree(root.left);
    }
        
    if(!!root.right) {
        root.right = pruneTree(root.right);
    }
    
    if(!root.left && !root.right && root.val === 0) {
        return null;
    }
    
    return root;
};