/**
 * @param {number[][]} A
 * @return {number}
 */

 var A = [[0,0,1,1],
		 [1,0,1,0],
		 [1,1,0,0]];

var matrixScore = function(A) {
	var sum = 0;
    for (var i = 0; i < A.length; i++) {
    	if (A && !A[i][0]) {A = changerow(A,i);}
    }
    for (var i = 1; i < A[0].length; i++) {
		var flag=0;
    	for (var j = 0; j < A.length; j++) {
    		if (A[j][i] == 1) {flag+=1;}
    	}
    	if (flag < A.length/2) {A = changecol(A,i);}

    }
    for (var i = 0; i < A.length; i++) {
	    sum += parseInt(A[i].join(""),2)
    }
    return sum;
};

var changecol = function(arr,j) {
	for (var i = 0; i < arr.length; i++) {
		arr[i][j] = arr[i][j]^1;
	}
	return arr;
};

var changerow = function(arr,j) {
	for (var i = 0; i < arr[j].length; i++) {
		arr[j][i] = arr[j][i]^1;
	}
	return arr;
};

console.log(matrixScore(A));


var matrixScore = function(A) {
    function flip(A,c,r,isRow){
        if(isRow){
            for(let i = 0; i<A.length;i++)
                A[i][r] = A[i][r] ? 0 : 1;
        }else{
            for(let i = 0; i<A[c].length;i++)
                A[c][i] = A[c][i] ? 0 : 1;
        }
    }
    function isFlipRow(A,rIndex){
        let count = 0;
        for(let i = 0; i<A.length;i++)
            A[i][rIndex] && count++;
        return (A.length-count)>count;
    }
    for(let i = 0; i<A.length;i++){
        !A[i][0] && flip(A,i,0);
    }
    for(let i = 1; i<A[0].length;i++){
        isFlipRow(A,i) && flip(A,0,i,true);
    }
    let sum=0;
    for(let i=0;i<A.length;i++)
        sum+=parseInt(A[i].join(''),2);
    return sum;
};
