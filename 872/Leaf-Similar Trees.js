/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    var leafValue = function(root){
    	var result=[];
    	if(!root.left && !root.right){
    		result.push(root.val);
    		return result;
    	}
    	if(!!root.left){
    		result = result.concat(leafValue(root.left));
    	}
    	if(!!root.right){
    		result = result.concat(leafValue(root.right));
    	}
    	return result;
    }
    return leafValue(root1).toString()==leafValue(root2).toString();
};


var leafSimilar = function(root1, root2) {
    let tree1Leaves = [];
    let tree2Leaves = [];
    
    function dfs(node, arr) {
        if(!node.left && !node.right) {
            arr.push(node.val);
        }
        
        if(node.left) dfs(node.left, arr);
        if(node.right) dfs(node.right, arr);
    }
    
    dfs(root1, tree1Leaves);
    dfs(root2, tree2Leaves);
    
    return checkEquality(tree1Leaves, tree2Leaves);
};

function checkEquality(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
}

console.log(JSON.stringify({name : 'guoshuai'}));