/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
 S = "eoftqrwwvgtmrqmymfyj", C = 'o'
var shortestToChar = function(S, C) {
	var result = [];
	var trans = function (num) {
    	if (num == -1) {
    		return S.length+999;
    	}
    	return num;
    };
    var transs = function (num) {
    	if (num == -1) {
    		return -S.length-999;
    	}
    	return num;
    };
    for (var i = 0; i < S.length; i++) {
    	result.push(Math.min(trans(S.indexOf(C,i))-i,i-transs(S.lastIndexOf(C,i))));
    	console.log(S.indexOf(C,i),S.lastIndexOf(C,i));
    }
    
    return result;
};

var shortestToChar = function(S, C) {
    let len = S.length;
    let ret = new Array(len);

    let prev = -len-1;
    for (let i = 0; i < len; i++) {
        if (S.charAt(i) === C) {
            prev = i;
        }
        ret[i] = i - prev;
    }

    prev = len*2;
    for (let i = len - 1; i >= 0; i--) {
        if (S.charAt(i) === C) {
            prev = i;
        }
        ret[i] = Math.min(ret[i], prev - i);
    }

    return ret;
};
console.log(shortestToChar(S,C));