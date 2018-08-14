/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
	var result = [];
    var splitNum = function(num) {
    	return num.toString().split("").map(function(a){ return parseInt(a);});
    }
    var isDividingNumbers = function (num){
    	var flag = true;
    	var nei = splitNum(num);
    	for (var i = 0; i < nei.length; i++) {
    		if(num%nei[i]!=0) flag = false;
    	}
    	return flag;
    }
    for (var i = left; i <= right; i++) {
    	if (isDividingNumbers(i)) {result.push(i);}
    	
    }
    return result;
};

var selfDividingNumbers = function(left, right) {
  let arr = []
  for(let i=left;i<=right;i++){
    if(valid(i)){arr.push(i)}
  }
  return arr
};

let valid = (num)=>{
  let temp = num
  while(temp>0){
    if(temp%10===0||num%(temp%10)!==0){
      return false
    }
    temp = Math.trunc(temp/10)
  }
  return true
}

console.log(selfDividingNumbers(1,22));