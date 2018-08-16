/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */

// letters = ["c", "f", "j"]
// target = "a"
// Output: "c"
var nextGreatestLetter = function(letters, target) {
    // var a = letters.reduce(function(pre,cur,index,array){
    //    return  (pre>cur||pre==target)?cur:(pre>target?pre:target);
    // });
    var a = letters.map(function (value, index, array) {
        return value>target?value:undefined;
    }).sort(function(a,b){
        return a>b?1:-1;
    })[0];

    return a||letters.sort(function(a,b){
        return a>b?1:-1;
    })[0];
};


//瞎扯，出题各种情况也不说明，还让人来猜；
console.log(nextGreatestLetter(["c","f","j"],'d'));


// Input:["c","f","j"]"c"
// Output:"c"
// Expected:"f"


// Input:["c","f","j"]"c"
// Output:"c"
// Expected:"f"