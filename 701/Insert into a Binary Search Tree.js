/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if (!root) {
    	return new TreeNode(val);
    }else if (root.val > val) {
    	if (!!root.left) {
    		insertIntoBST(root.left,val);
    		return root;
    	}
    	root.left = new TreeNode(val);
    	return root;
    }else {
    	if (!!root.right) {
    		insertIntoBST(root.right,val);
    		return root;
    	}
    	root.right = new TreeNode(val);
    	return root;
    }
};

var insertIntoBST = function(root, val) {
    if (!root) return new TreeNode(val);
    if (root.val > val) {
        root.left = insertIntoBST(root.left, val);
    } else {
        root.right = insertIntoBST(root.right, val);
    }
    return root;
};