/**
 * @param {number[][]} A
 * @return {number[][]}
 */
 
var flipAndInvertImage = function(A) {
    var result = [];
    for (var i = A.length - 1; i >= 0; i--) {
    	for (var j = A[i].length - 1; j >= 0; j--) {
    		if(result[i]==undefined) {result[i]=[];console.log('kao')};
    		result[i][j] = A[i][A[i].length-j-1]^1;
    	}
    }
    return result;
};



var flipAndInvertImage = function(A) {
    for (let i = 0; i < A.length; i++) {
        for (let k = 0; k < A[i].length / 2; k++) {
            let a                  = A[i][k];
            let b                  = A[i][A.length - 1 - k];
            A[i][k]                = b === 1 ? 0 : 1;
            A[i][A.length - 1 - k] = a === 1 ? 0 : 1;
        }
    }

    return A;
};

console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]));