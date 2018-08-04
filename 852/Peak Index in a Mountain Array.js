/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
    for (var i = 0; i < A.length; i++) {
    	if (A[i]>A[i-1]&&A[i]>A[i+1]) {return i;}
    }
    return 1;
};

console.log(peakIndexInMountainArray([3,4,5,1]));

var peakIndexInMountainArray = function(A) {
    if(A.length < 2)
        return null;
    for(var i=0; i<A.length-2; i++){
       if( A[i+1]-A[i] > 0 && A[i+2]-A[i+1] < 0){
           return i+1;
       }
    }
};