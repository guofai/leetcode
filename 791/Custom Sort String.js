/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function(S, T) {
    var str = T.split('');
    str.sort(function(a,b){
        if (S.indexOf(a)>S.indexOf(b)) {
        	return 1;
        }else{
        	return -1;
        }
    });
    return str.join('');
};

var customSortString = function(S, T) {
  var str = ''
  for (let i = 0; i < S.length; i++) {
    while (T.indexOf(S[i]) > -1) {
      str += S[i];
      T = T.replace(S[i], '');
    }
  }
  return str += T;    
};

var s = 'abcdefghigk';
var h = 'cabdf';
s = s.replace('a','3');
console.log(s);
console.log(customSortString(s,h));

