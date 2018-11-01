/**
 * @param {number} N
 * @return {number}
 */
var countArrangement = function(N) {
    var result = 0;
    var a = [[1]];
    //每一列数
    for (var i = 1;i<N;i++){
        var b =[];
        //前一列有多少项
        for (var j = 0; j < a.length; j++) {
            //每项不同位置插入
            for (var y = 0; y < i+1; y++) {
                var tmp = [];
                Object.assign(tmp,a[j]);
                tmp.splice(y, 0, i+1);
                b.push(tmp);
            }
        }
        a = b;
    }
    for (var i = 0; i < a.length; i++) {
        if(isArrangement(a[i])){
            result++;
        }
    }
    return result;
};


var isArrangement = function(arr){
    for (var i = 0; i < arr.length; i++) {
        if ((i+1) % arr[i] !== 0 && arr[i] % (i+1) !== 0) {
            return false;
        }
    }
    return true;
}
