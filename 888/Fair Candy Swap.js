/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
    var sumA = A.reduce(function(pre,cur,index,arr){
    	return pre+cur;
    });
    var sumB = B.reduce(function(pre,cur,index,arr){
    	return pre+cur;
    });
    var sub = sumA-sumB;
    for (var i = 0; i < A.length; i++) {
    	for (var j = 0; j < B.length; j++) {
    		if (2*(A[i]-B[j])==sub){return [A[i],B[j]];}
    	}
    }
    return [];
};

var fairCandySwap = function(A, B) {
    let totalA = 0;
    for (let i = 0; i < A.length; i++) {
        totalA += A[i];
    }
    
    let totalB = 0;
    for (let i = 0; i < B.length; i++) {
        totalB += B[i];
    }

    const delta = (totalA - totalB) / 2;
    const set = new Set(B);
    
    for (let i = 0; i < A.length; i++) {
        if (set.has(A[i] - delta)) {
            return [A[i], A[i] - delta];
        }
    }
};