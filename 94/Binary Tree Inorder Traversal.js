/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    var result = [];
    var traversal = function(rot){
    	if (rot!==null) {
    		if (rot.left!==null) {
    			traversal(rot.left);
    		}
    		result.push(rot.val);
    		if(rot.right!==null){
    			traversal(rot.right)
    		}
    	}
    }
    traversal(root);
    return result;
};

const inorderTraversal = root => {
  if (!root) return [];
  
  return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]
};
