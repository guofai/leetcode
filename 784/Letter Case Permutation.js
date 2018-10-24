/**
 * @param {string} S
 * @return {string[]}
 */

var letterCasePermutation = function(S) {
    var str = S.toLowerCase().split('');
    var heheda = add(str,['']);
    return heheda;
};

var add = function(adder,adding){
	if (adder.length==0) {return adding;}
	var str = adder.shift();
	var result = [];
	if (str.charCodeAt(0)>=48 && str.charCodeAt(0)<=57) {
		//如果是数字
		for (var i = 0; i < adding.length; i++) {
			result.push(adding[i]+str);
		}
		return add(adder,result);
	}else{
		//否则为字母
		for (var i = 0; i < adding.length; i++) {
			result.push(adding[i]+str);
		}
		for (var i = 0; i < adding.length; i++) {
			result.push(adding[i]+str.toUpperCase());
		}
		return add(adder,result);
	}
}

var letterCasePermutation = function(S) {
    var results = [];
    helper(S, "", 0, results);
    return results;
};

var helper = function(original, tmpStr, index, results)
{
    if(index === original.length)
    {
        results.push(tmpStr);
        return;
    }
    
    var currChar = original.charAt(index);
    
    if(isNaN(currChar * 1))
    {    
        helper(original, tmpStr + currChar.toLowerCase(), index + 1, results);
        helper(original, tmpStr + currChar.toUpperCase(), index + 1, results);
    }
    else
    {
        helper(original, tmpStr + currChar, index + 1, results);
    }
}

console.log(letterCasePermutation('h1h'));