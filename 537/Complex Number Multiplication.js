var complexNumberMultiply = function(a, b) {
    var num1 = a.split('+');
    var num2 = b.split('+');
    a = parseInt(num1[0]);
    b = parseInt(num1[1].slice(0,-1));
    var c = parseInt(num2[0]);
    var d = parseInt(num2[1].slice(0,-1));
    var shibu = a*c-b*d;
    var xubu = a*d+b*c;
    return shibu.toString()+'+'+xubu.toString()+'i';
};

console.log(complexNumberMultiply('1+10i','5+6i'));
