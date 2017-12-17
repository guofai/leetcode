/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    var patt = /^[a-zA-Z]?[a-z]*$|^[a-z]*$|^[A-Z]*$/;
    return patt.test(word);
};

console.log(detectCapitalUse("guoshuai"));

//更骚的正则   跟我写的差不多嘛
var detectCapitalUse = function(word) {
    var regex = /(^[A-Z]+$)|(^[a-z]+$)|(^[A-Z][a-z]*$)/
    return regex.test(word)
};

//非正则    也是思路清奇。。。
var detectCapitalUse = function(word) {
    if (!word) {
        return true;
    }

    var uppered = word.toUpperCase(), lowered = word.toLowerCase();

    return word === uppered || word === lowered || word[0] === uppered[0] && word.slice(1) === lowered.slice(1);
};