// var findLUSlength = function(a, b) {
//     if(a.length !== b.length) return a.length>b.length?a.length:b.length;
//     var result = '';
//     for(var i=0;i<a.length;i++){
//         result += a[i]===b[i]?0:1;
//     }
//     console.log(result);
//     result = result.split('0').map(function(item,index,array){
//         return item.length;
//     });
//     result = result.reduce(function(prev,cur,index,array){
//         return prev > cur?prev:cur;
//     });
//     result = result===-1?0:result;
//     return result;
// };

//真就这么简单？果然我一直想多了。
var findLUSlength = function(a, b) {
    if(a===b) return -1;
    return Math.max(a.length,b.length);
    return result;
};

console.log(findLUSlength('aba','cdc'));