/**
 * @param {number} N
 * @return {number}
 */
var countArrangement = function(N) {
    var result = 0;
    var a = [];
    for (var i = 0;i<N;i++){
        a.push(i+1);
    }
    var b = a;
    for (var i = 0;i<N;i++){
        for (var j = 0;j<N;j++){
            a=b.slice(0);
            swap(a,i,j);
            console.log(a);
        }
    }
    return a;
};

var swap = function (array,a,b) {
    var tmp = array[a];
    array[a] = array[b];
    array[b] = tmp;
}
console.log(countArrangement(3));

//现在是，如何生成    所有序列，来遍历。
//脑子，特乱。。。
