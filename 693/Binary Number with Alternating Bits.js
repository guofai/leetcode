/**
 * @param {number} n
 * @return {boolean}
 */


var hasAlternatingBits = function(n) {
    var a = n.toString(2);
    a = a.split('0');
    if (a[a.length-1]==='') a.length -=1;
    a = a.every(function(item,index,array){
        return Boolean(item) && item.length === 1;
    });
    return a;
};

console.log(hasAlternatingBits(13));

//看看大神咋写的

var hasAlternatingBits = function(n) {
    var str = n.toString(2);
    var flag;
    var tmp=str[0];
    for(var i=1;i<str.length;i++) {
        //搁这里，用异或，也是666
        flag = tmp^str[i];
        if(flag == 0) {
            return false;
        }
        tmp = str[i];
    }
    return true;
};