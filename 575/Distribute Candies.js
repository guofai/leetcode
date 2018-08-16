
// document.write("<script language=javascript src='jquery-3.2.1.js'></script>");
var distributeCandies = function(candies) {
    var i = candies.length/2;
    var j = unique(candies).length;
    return j < i? j:i;
    // if (unique(candies).length < candies.length/2) {
    //     return unique(candies).length;
    // } else {
    //     return (candies.length)/2;
    // }

};

var unique = function (results) {
    var elem, i = 1;
    results.sort();
    for (;i <= results.length; i++) {
        elem = results[i];
        if (elem === results[i - 1]) {
            results.splice(i--, 1);
        }
    }
    return results;
};
// console.log(distributeCandies([100000,0,100000,0,100000,0,100000,0,100000,0,100000,0]));
// console.log([1,2,3].length);

//更牛皮的方法
var distributeCandies = function(candies) {
    return Math.min(candies.length/2,new Set(candies).size)
};
//ES6提供了数据结构Set。类似于数组，但是没有重复值。
// Sets
var s = new Set();
s.add("hello");
s.add("goodbye").add("hello");
s.size === 2;
s.has("hello") === true;
console.log(s);
// Maps
var m = new Map();
m.set("hello", 42);
m.set(s, 34);
m.get(s) == 34;