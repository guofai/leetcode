/**
 * @param {number} N
 * @return {number}
 */
var binaryGap = function(N) {
    var binary =  N.toString(2);
    var max = 0;
    var tmp = 0;
    for (var i = 0; i < binary.length; i++) {
    	if (binary[i] == '1') {
    		max = max>(i-tmp)?max:(i-tmp);
    		tmp = i;
    	}
    }
    return max;
};

console.log(binaryGap(22));

var binaryGap = function (N) {
    var numString = N.toString(2);
    var max = 0;
    var startIndex = -1;
    var diff;
    for (var i = 0; i < numString.length; i++) {
        if (startIndex === -1 && numString.charAt(i) === '1')
            startIndex = i;
        else if (startIndex !== -1 && numString.charAt(i) === '1') {
            diff = i - startIndex;
            if (diff > max)
                max = diff;
            startIndex = i;
        }
    }
    return max;
};

