/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
	if (!A) {return [];}
    var result=[];
    for (var i = 0; i < A.length; i++) {
    	result[i]=[];
    	for (var j = 0; j < A[i].length; j++) {
    		result[i][j] = A[j][i];
    	}
    }
    return result;
};

var transpose = function(A) {
let res = new Array();
for(let i = 0; i < A[0].length ; i++) {
    res[i] = [];
        for(let j = 0; j < A.length; j++ ) {          
            res[i][j] = A[j][i]
        }
    }
    return res;
};

console.log(transpose([[1,2,3],[4,5,6],[7,8,9]]));
