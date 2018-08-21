/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function(widths, S) {
	var result = [1,0];
    for (var i = 0; i < S.length; i++) {
    	var tmp = result[1];
    	result[1] += widths[S[i].charCodeAt()-97];
    	if(result[1]>100){
    		result[1] = 0;
    		result[0]++;
    		i--;
    	}
    }
    return result;
};

var numberOfLines = function(widths, S) {
    runningTotal =0;
    lineCount = 0;
    for(i=0;i<S.length;i++){
        tempWidth = widths[S[i].charCodeAt() - 97];
        runningTotal = runningTotal+tempWidth;
        if(runningTotal > 100) {
            lineCount++;
            runningTotal = tempWidth;
        }
    }
    lineCount++;
    return [lineCount, runningTotal];
    
};