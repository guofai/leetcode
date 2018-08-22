/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
    var strA = A.split(" ");
    var strB = B.split(" ");
    //查询出现一次的单词
    var arrA = appearOnce(strA);
    var arrB = appearOnce(strB);
    var result = [];
    //出现一次的单词不在另一个数组
    for (var i = 0; i < arrA.length; i++) {
    	if(!checkItemIn(strB,arrA[i])) result.push(arrA[i]);
    }
    for (var i = 0; i < arrB.length; i++) {
    	if(!checkItemIn(strA,arrB[i])) result.push(arrB[i]);
    }
    return result;
};


var appearOnce = function(arr){
	var obj = {};//定义一个对象来保存str拆分出来的元素，把一个字符当做key，字符出现的次数当做value 保存在obj中
	for (var i = 0; i < arr.length; i++) {
	    if (!obj[arr[i]]) { // 如果obj中没有存在当前遍历的值
	        obj[arr[i]] = 1  // 就给他添加一个1，比如：“a”:1
	    }
	    else {
	        obj[arr[i]]++  //如果存在就让它的值加1
	    }
	}
	 
	//程序执行到这一步的时候 obj={ "a":2 , "b":3 , "c":4 }
	//然后用for in 来遍历 obj 对象里面的值
	var result = [];
	for (var i in obj) {
	    if (obj[i] == 1) {
	        result.push(i);
	    }
	}
	return result;
}

var checkItemIn = function(arr,item){
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == item) {
			return true;
		}
	}
	return false;
}

var uncommonFromSentences = function(A, B) {
    var a = A.split(" ");
    var b = B.split(" ");

    var aCount = {};
    for(var i = 0; i < a.length; i++) {
      if(!aCount[a[i]]) {
        aCount[a[i]] = 0
      }
      aCount[a[i]]++;
    }

    var bCount = {};
    for(var i = 0; i < b.length; i++) {
      if(!bCount[b[i]]) {
        bCount[b[i]] = 0
      }
      bCount[b[i]]++;
    }

    var results = [];

    for(var w in aCount) {
      if(aCount[w] === 1 && !bCount[w]) {
        results.push(w);
      }
    }

    for(var w in bCount) {
      if(bCount[w] === 1 && !aCount[w]) {
        results.push(w);
      }
    }

    return results;
};