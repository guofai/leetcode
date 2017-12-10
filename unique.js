
//有个BUG 当数组中有0的时候，就会跳出，之后的值都不会消重，但由于在之前要先排序的，当数组中有0的话，就不会消重。
var unique = function (results) {
    var elem, i = 1;
    results.sort();
    for (;(elem = results[i]); i++) {
        if (elem === results[i - 1]) {
            results.splice(i--, 1);
        }
    }
    return results;
}

var a = [1,1,2,2,3,3,4,4,5,5];
console.log(unique(a));

var steam_safe_code = 'R99386';