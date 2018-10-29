/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
	var str={};
	var max=[];
	var result ='';
    for (var i = 0; i < s.length; i++) {
    	if (!str[s[i]]) {
    		str[s[i]]=1;
    	}else{
            str[s[i]]+=1;
    	}
    }
    for (var key in str) {
    	max.push([key,str[key]]);
    }
    max.sort(function(a,b){
    	if (a[1] >= b[1]) {
    		return -1;
    	}else{
    		return 1;
    	}
    });
    for (var i = 0; i < max.length; i++) {
    	for (var j = 0; j < max[i][1]; j++) {
    		result+=max[i][0];
    	}
    }
    return result;
};

var frequencySort = function(s) {
    const charMap = {};
    for (let i = 0; i < s.length; i++) {
        const index = s.charAt(i);
        charMap[index] = (charMap[index] || 0) + 1;   
    }
    return Object.entries(charMap).sort((a, b) => {
        return b[1] - a[1]
    }).map((x) => {
        return x[0].repeat(x[1])
    }).join('')
};