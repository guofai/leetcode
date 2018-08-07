/**
 * @param {number[][]} graph
 * @return {number[][]}
 */

// Input: [[1,2], [3], [3], []] 
// Output: [[0,1,3],[0,2,3]] 

// var allPathsSourceTarget = function(graph) {
//     var result = [0];
//     var i=0;
//     while(graph[i][0]){
//     	i = graph[i][0];
//     	result.push(i);
//     }
//     return result;
// };

var allPathsSourceTarget = function(graph) {
	var len = graph.length;
    var findPath = function(node){
    	if (node == len-1) {return [[len-1]];}
    	var path = [];
    	for (var i = 0; i < graph[node].length; i++) {
    		var nei = findPath(graph[node][i]);
    		for (var j = 0; j < nei.length; j++) {
    			path.push([node].concat(nei[j]));
    		}
    	}
    	return path;
    }

    return findPath(0);
};


var gAnswer = null
var gAns = null
var gGraph = null

var allPathsSourceTarget = function(graph) {
    gAnswer = []
    gAns = [0]
    gGraph = graph
    helper(0)
    return gAnswer
};

var helper = (row) => {
    if(row === gGraph.length - 1) {
        gAnswer.push(gAns.slice())
        return;
    }
    for(let col = 0; col < gGraph[row].length; col++) {
        gAns.push(gGraph[row][col])
        helper(gGraph[row][col])
        gAns.pop()
    }
}

console.log(allPathsSourceTarget([[1,2], [3], [3], []]));