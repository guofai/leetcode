/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
	var result = true;
    for (var i = 0; i < matrix.length-1; i++) {
    	for (var j = 0; j < matrix[i].length-1; j++) {
    		if(matrix[i][j] != matrix[i+1][j+1]){
    			return false;
    		}
    	}
    }
    return result;
};

var isToeplitzMatrix = function(matrix) {
    for(let i=0;i<matrix.length;i++) {
        for(let j=0;j<matrix[0].length;j++) {
            if(i > 0 && j > 0 && matrix[i-1][j-1] != matrix[i][j]) {
                return false;
            }
        }
    }
    return true;
};

var n = [
  [1,2,3,4],
  [5,1,2,3],
  [9,5,2,2]
]
console.log(isToeplitzMatrix(n));