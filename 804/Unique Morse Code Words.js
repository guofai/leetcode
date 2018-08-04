var morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
var dirtoy ={};
for (var i = 0; i < 26; i++) {
	dirtoy[String.fromCharCode((97+i).toString(10))]=morse[i];
}

function Morse(str){
	var strarr = str.toLowerCase().split("");
	var result = "";
	for (var i = 0; i < strarr.length; i++) {
		result += dirtoy[strarr[i]];
	}
	return result;
}

function unique(arr){
	return Array.from(new Set(arr));
}

function uniqueMorseRepresentations(arr){
	for (var i = 0; i < arr.length; i++) {
		arr[i] = Morse(arr[i]);
	}
	return unique(arr).length;
}
console.log(uniqueMorseRepresentations(["heheNda","hengheng"]));

// 是不是有点看不懂的
const uniqueMorseRepresentations = (words) => {
    const morseArr = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    
    const diffWords = new Set();

    //97 is ASCII code of a
    for (let word of words) {
        let morseWord = word.split('').reduce((res, s) => res += morseArr[s.charCodeAt(0) - 97], '');
        diffWords.add(morseWord);
    }
    
    return diffWords.size;
};

var uniqueMorseRepresentations = function (words) { 
    const codes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    const morse = char => codes[char.charCodeAt(0) - 'a'.charCodeAt(0)];
    return new Set(words.map(word => word.split('').map(morse).join(''))).size;
}