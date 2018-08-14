/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
	if (!S) { return [];}
	var result = [];
	var firstCut = cutPlace(S);
	var head = S.substring(0,firstCut);
	var tail = S.substring(firstCut);
	result.push(firstCut);
	var cutStr = function (str){
		if (!str) {return 1;}
		var tmpPlace = cutPlace(str);
		result.push(tmpPlace);
        cutStr(str.substring(tmpPlace));
	}
	cutStr(tail);
	return result;
};

var cutPlace = function(str) {
	var flag = 0;
	var i = 0;
	while (i <= flag){
		var tmp = str.lastIndexOf(str[i]);
		flag = tmp>flag?tmp:flag;
		i++;
	}
	return i;
}
console.log(partitionLabels('aaaaabbbbbcccccdddddeeeeefffffggggg'));
/*
var partitionLabels = function(S) {
    let myMap = new Map();    
    for (let i = 0; i < S.length; i++) {
        let char = S.charAt(i);
        if (!myMap.has(char)) {
            myMap.set(char, {left: i, right: i});
        } else {
            myMap.set(char, {left: myMap.get(char).left, right: i});
        }
    }
    let result = [];
    myMap.forEach((curr, key)=>{
        let prev = result[result.length-1];
        if (!result.length || prev.right < curr.left) {
            result.push({...curr});
        } else if (prev.right > curr.left && prev.right < curr.right) {
            prev.right = curr.right;
        }
    });
    return result.map(curr => curr.right-curr.left+1);
};
*/

// Method 2:
var partitionLabels = function(S) {
    let last = {},
        j = 0,
        anchor = 0,
        ans = []

    // 记录字符最后出现的位置
    for (let i = 0, len = S.length; i < len; i++) {
        last[S[i]] = i
    }
    for (let i = 0, len = S.length; i < len; i++) {

        // 从上次划分到前j个字符中, 选取最大的最后出现的index
        // 当i === j时, 说明前面的字符都可以被这一次划分包括进去
        j = Math.max(j, last[S[i]])
        if (i === j) {
            ans.push(i - anchor + 1)

            // 记录下划分的起始点
            anchor = i + 1
        }
    }

    return ans
};