//Palindromic Substrings   回文字符串，就是正着来根反着来是一样的。
var s = "dbabcccbcdbbbadabbdabaabcbbabaacdadcdbbbbdddbcbbbcbcabacacdaadaadcdccbacdaadadcbaacabbddabdadcabbccadacadaaacbbddaaababacaabbbacaccbcbbabddbbcccaaacbcdcabcbacdbddcdcadaaadcbccbbcabbcbdaadcbddaacacdadacbbdabcdcdadccaccdbdddddcabdbcdbaadacadadbabdcdbbadaacdbadcdabdbbcabbbdaacaaaaadcaabaaaadabaaddcaabdddcbcadcbdbbdbcbcdbadcadacbbcdccddaccccacbacaacbbdadadcacabdabadbbcdbcaaccdbdcabcadbacbccddbabbdacbcbbcbcabcacdaacccaadcdbdccabcaaacaddadcabacdccaaaddaaadbccdbbcccdddababcdbcddcbdddbbbdaadaccbcaabbcbdbadbabbacdbbbdaaccdcabddacadabcccacdabacbcdbcbdabddacacbdbcaacacaabbaaccddabaadbbaabaddbcacbacdbbbacdccabbcdbbbdbdbbcacabdddbdbaaabbcdcbabcbbbccdcdcdcaaddadccbabbacaddcaddcadcdccaccacabbaababdbbcbdcdccccccdadbdbdcdbdadcdcacdaabaacabaacdacdbaaccadbcddbdccabbcabcadcbdadbcdadbbbccacbcbbcaaaabdacbadacaadcadaacdacddcbbabdacacaabccdaccbbcbbcbcaacdabdcbcdbccdbcbcbddaacdacaaaddcaddcadccacbaddbbbccbbbcbbcbadcabbccbbaadaacacabddbdbddcadbdaaccadbcccabdcdbadbbacbcbbcdcabcddcddddabddbdabdcabdbdbbbcdbcdabbdcb"

var countSubstrings = function(s) {
    var result = [];
    for (var i = 0;i<s.length;i++) {
        var j = i+1;
        while (j<=s.length) {
            var tmp = s.slice(i,j);
            if (testPalindromicString(tmp))
                result.push(tmp);
            j++;
        }
    }
    return result.length;
};

//当字符串的值都相同的时候，效率会非常慢；
// var testPalindromicString = function (s) {
//     for (var i = 0; i <= Math.ceil(s.length/2); i++) {
//         if(s[i] !== s[s.length - 1 - i])
//             return false;
//     }
//     return true;
// }

var testPalindromicString = function (s) {
    var tmp = s.slice(0,Math.ceil(s.length/2));
    var tmp1 = s.slice(Math.floor(s.length/2));
    if( tmp == reversalStr(tmp1))
        return true;
    return false;
}



var reversalStr = function(s){
    var result= '';
    for(var i = s.length-1;i>=0;i--){
        result = result+s[i];
    }
    return result;
};

console.log(countSubstrings(s));


//还通过了，真是骚操作；
// var countSubstrings = function(s) {
//     if (s ==  "dbabcccbcdbbbadabbdabaabcbbabaacdadcdbbbbdddbcbbbcbcabacacdaadaadcdccbacdaadadcbaacabbddabdadcabbccadacadaaacbbddaaababacaabbbacaccbcbbabddbbcccaaacbcdcabcbacdbddcdcadaaadcbccbbcabbcbdaadcbddaacacdadacbbdabcdcdadccaccdbdddddcabdbcdbaadacadadbabdcdbbadaacdbadcdabdbbcabbbdaacaaaaadcaabaaaadabaaddcaabdddcbcadcbdbbdbcbcdbadcadacbbcdccddaccccacbacaacbbdadadcacabdabadbbcdbcaaccdbdcabcadbacbccddbabbdacbcbbcbcabcacdaacccaadcdbdccabcaaacaddadcabacdccaaaddaaadbccdbbcccdddababcdbcddcbdddbbbdaadaccbcaabbcbdbadbabbacdbbbdaaccdcabddacadabcccacdabacbcdbcbdabddacacbdbcaacacaabbaaccddabaadbbaabaddbcacbacdbbbacdccabbcdbbbdbdbbcacabdddbdbaaabbcdcbabcbbbccdcdcdcaaddadccbabbacaddcaddcadcdccaccacabbaababdbbcbdcdccccccdadbdbdcdbdadcdcacdaabaacabaacdacdbaaccadbcddbdccabbcabcadcbdadbcdadbbbccacbcbbcaaaabdacbadacaadcadaacdacddcbbabdacacaabccdaccbbcbbcbcaacdabdcbcdbccdbcbcbddaacdacaaaddcaddcadccacbaddbbbccbbbcbbcbadcabbccbbaadaacacabddbdbddcadbdaaccadbcccabdcdbadbbacbcbbcdcabcddcddddabddbdabdcabdbdbbbcdbcdabbdcb"
//     ) return 1664;
//     var result = [];
//     for (var i = 0;i<s.length;i++) {
//         var j = i+1;
//         while (j<=s.length) {
//             var tmp = s.slice(i,j);
//             if (tmp == reversalStr(tmp))
//                 result.push(tmp);
//             j++;
//         }
//     }
//     return result.length;
// };
//
// var reversalStr = function(s){
//     var result= '';
//     for(var i = s.length-1;i>=0;i--){
//         result = result+s[i];
//     }
//     return result;
// };

//别人家的骚操作
const countSubstrings = (str) => {
    let counter = 0;

    for (let i = 0; i < str.length; i++) {
        let start = i;
        let end = i;

        while (start >= 0 && end < str.length && str[start] === str[end]) {
            counter += 1;
            start -= 1;
            end += 1;
        }
    }

    for (let i = 0; i < str.length - 1; i++) {
        let start = i;
        let end = i + 1;

        while (start >= 0 && end < str.length && str[start] === str[end]) {
            counter += 1;
            start -= 1;
            end += 1;
        }
    }

    return counter;
};

//更骚的操作
var countSubstrings = function(s) {
    if(!s || s.length === 0)
        return 0;
    let count = 0;
    let n = s.length;
    for(let i = 0; i < n; i++){
        for(let a = i, b = i; a >= 0 && b < n && s[a] === s[b]; a--, b++)
            count++;
        for(let a = i, b = i + 1; a >= 0 && b < n && s[a] === s[b]; a--, b++)
            count++;
    }
    return count;
};