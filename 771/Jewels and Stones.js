var numJewelsInStones = function(J, S) {
    var ha = J.split("");
    var heng = S.split("");
    var count = 0;
    console.log(ha);
    ha.forEach(function(a){
    	// console.log(a,b,c);
    	heng.forEach(function(b){
    		if (a==b) {count++;}
    	});
    });
    return count;
    
};

console.log(numJewelsInStones("hehe","hehe"));

var numJewelsInStones = function(j, s) {
  let jArr = j.split('');
  let sArr = s.split('');
  let num = 0;
  for (let j in sArr) {
    if (jArr.includes(sArr[j])) {
      num++
    }
  }
  return num;
};