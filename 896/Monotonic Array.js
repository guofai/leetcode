/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
	var result = true;
	var flag;
    for (var i = 0; i < A.length; i++) {
    	if (flag) {
    		if ((A[i+1]-A[i])*flag<0) {
    			return false;
    		}
    	}else{
    		if (A[i+1]-A[i]>0) {
    			flag = 1;
    		}else if(A[i+1]-A[i]<0){
    			flag = -1;
    		}
    	}
    }
    return result;
};

var isMonotonic = function(A) {
    if(A.length <=1){
        return true;
    }
    let diff = A[1]-A[0];
    for(let i=2;i<A.length;i++){
        const cd = A[i]-A[i-1];
        if(cd === 0){
            continue;
        }
        if(diff >= 0 && cd >=0){
            diff = cd;
            continue;
        }
        if(diff <=0 && cd <=0){
            diff = cd;
            continue;
        }
        return false;
    }
    return true;
};
