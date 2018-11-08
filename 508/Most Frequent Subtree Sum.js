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

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var findFrequentTreeSum = function(root) {
	var sum = [];
	var TreeSum = function(root){
	    if (root==null) {
    		return 0;
    	}
        if(root.left==null && root.right==null){
        	sum.push(root.val);
        	return root.val;
        }
        var temp_sum = root.val+TreeSum(root.left)+TreeSum(root.right);
        sum.push(temp_sum);
        return temp_sum;
    }
    TreeSum(root);
    var tmp_obj = {};
    for (var i = 0; i < sum.length; i++) {
    	tmp_obj[sum[i]] = (tmp_obj[sum[i]]||0)+1;
    }
    var resultTime = 0;
    var resultVal = undefine;
    for(var key in tmp_obj){
    	if(resultTime<tmp_obj[key]){
    		resultTime=tmp_obj[key];
    		resultVal = key;
    	}
    }
    console.log(sum);
    if (resultTime == 1) {
    	return sum;
    }else{
    	return [resultVal];
    }
};

var a = new TreeNode(5);
var b = new TreeNode(2);
var c = new TreeNode(-5);

a.left = b;
a.right = c;
console.log(findFrequentTreeSum(a));

/*
i root of a tree
o Array of the most frequent subtree sums
c 
e empty tree

plan: recursive helper function
have a hash where key:value :: sum:frequency
track current max frequency
have an array of most frequent occurers
recurse into tree
    takes in a node
    if the node is null, return 0
    if the node has no children, put the value into the hash
        then see if the frequency is greater than or equal to the current frequency
            if equal, add current value to array
            if greater, reset the array with just that value
                and reset current max frequency
    otherwise, do the same thing but with value + recur(left) + recur(right)
    
in the end, return the array
*/
var findFrequentTreeSum = function(root) {
    // if (root === null) {
    //     return [];
    // }
    let results = [];
    let currentMaxFreq = 0;
    let hash = {};
    
    const helper = (node) => {
        // handle base case of null
        if (node === null) {
            return 0;
        }
        let sum = node.val + helper(node.left) + helper(node.right);
        // sum is now subtree sum
        // if that sum hasn't been found before, add it to the hash
        hash[sum] = (hash[sum] || 0) + 1;
        // if sum has occurred as many times as the most frequent thing, add it to the results
        if (hash[sum] === currentMaxFreq) {
            results.push(sum);
        } else if (hash[sum] > currentMaxFreq) {
            currentMaxFreq += 1;
            results = [sum];
        }
        return sum;
    }
    
    helper(root);
    return results;
};
