/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function(L, R) {
	var count = 0;
    var isPrime = function(num){
    	if (num <= 1 ) {return false;}
    	var result = true;
    	for (var i = 2; i < num; i++) {
    		if(num%i == 0){
    			result = false;
    		}
    	}
    	return result;
    }

    for (var i = L; i < R+1; i++) {
    	if(isPrime(i.toString(2).replace(/0/g,'').length)) {
    		count++;
    	}
    }
    return count;
};

var countPrimeSetBits = function(L, R) {
    let res = 0;
        for(let i = L; i <= R;i++){
            let count = bitCount(i);
            res+= count < 4 ? (count > 1 ? 1 : 0) : (count %3 !=0 && count%2 !=0 ? 1 : 0); 
        }
        return res;
};

function bitCount(u) {
  const uCount = u - ((u >> 1) & 0o33333333333) - ((u >> 2) & 0o11111111111);
  return ((uCount + (uCount >> 3)) & 0o30707070707) % 63;
}

console.log(countPrimeSetBits(244,269));