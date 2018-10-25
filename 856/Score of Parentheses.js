/**
 * @param {string} S
 * @return {number}
 */
var scoreOfParentheses = function(S) {
    if (S==='()') {return 1;}
    var couple = findCouple(S);
    if (couple == S.length-1) {
    	return scoreOfParentheses(S.substr(1,S.length-2))*2;
    }else {
    	return scoreOfParentheses(S.substr(0,couple+1)) + scoreOfParentheses(S.substr(couple+1,S.length-1));
    }
};

var findCouple = function(Str) {
	var index = 1;
    for (var i = 1; i < Str.length; i++) {
    	if (Str[i] == '(') {
    		index++;
    	}else if (Str[i] == ')'){
    		index--;
    	}
    	if (index === 0) {
    		return i;
    	}
    }
    return 0;
};

var scoreOfParentheses = function(S) {
    if (S.length === 0) return 0;
    let stack = [];
    let res = [];
    let indexLeft = 0;
    for (let i = 0; i < S.length; i++){
        if(S[i] === '('){
            stack.push(i);
            
        } else {
            indexLeft = stack.pop();
            if (S[i - 1] === ')'){
                res[i] = 2 * res[i - 1];
            } else {
                res[i] = 1;
            }
            if (indexLeft > 0 && S[indexLeft - 1] === ')'){
                res[i] = res[i] + res[indexLeft - 1];
            }                
        }
    }
    return res[S.length - 1];
};

console.log(scoreOfParentheses('()()()'));