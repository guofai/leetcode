/**
 * @param {number[]} A
 * @return {number}
 */

var aaa = [1,2,3,4];
var numberOfArithmeticSlices = function(A) {
    var result = 0;
    var b = [];
    var c = [];
    for(var i = 0;i<A.length-1;i++){
        b.push(A[i]-A[i+1]);
    }
    for(i = 0;i<b.length-1;i++){
        c.push((b[i]^b[i+1])===0?0:1);
    }
    c = c.join('').split('1');
    c.forEach(function(item,index,array){
        if (item.length)
        result += factorial(item.length);
    });
    return result;
};

function factorial (num) {
    if (num < 0) {
        return -1;
    } else if (num === 0 || num === 1) {
        return 1;
    } else {
        return (num + factorial(num - 1));
    }
};
console.log(numberOfArithmeticSlices(aaa));
//这都可以通过？

//大神的代码
/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function (A) {
    var result = 0;
    const len = A.length;
    var delta = A[1] - A[0]
    var count = 0;
    var j = 0;
    for (let i = 2; i < len; i++){
        j = A[i] - A[i - 1];
        if ( j !== delta) {
            delta = j;
            count = 0;
        } else {
            count++;
            result+=count;
        }
    }
    return result;
};