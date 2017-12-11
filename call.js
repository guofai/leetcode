/**
 * 方法说明 计算阶乘
 * @method factorial()
 * @for 所属类名
 * @param {number}  num 阶乘的数字
 * @return {number} 阶乘
 */
// function factorial(num){
//     if (num <=1) {
//         return 1;
//     } else {
//         return num * arguments.callee(num-1)
//     }
// }
// console.log(factorial(5)); //120

// 这是一段阶乘的函数
// 不断的递归自己，直到num为1
// 但是这里为了解耦，将递归时候需要调用的函数写成了 arguments.callee
// 这里，arguements是函数的参数列表，但是其还有一个属性就是callee，是一个指针，指向拥有此参数的函数。
// 于是，每次递归的时候将此指针传递下去，都是factorial所指向的函数，无论factorial这个名字如何改变。

//函数对象的caller属性
// function outer(){
//    return inner();
// }
// function inner(){
//     return arguments.callee.caller;
// }
// var a = outer(); //[Function: outer]
// console.log(a);
// caller,直译过来就是‘呼叫者’，现在的理解为就是调用当前执行函数的函数。
// 在示例中，首先定义了两个函数，outer()和inner()函数
// 在windows上下文中执行outer()函数，其调用了inner()函数，于是，在inner()中，会返回arguments.callee.caller
// arguments.callee就是当前的函数，即inner(),而inner()的属性，caller属性，表示着调用inner()函数的函数的引用。就是outer了。

// 函数还有两个非继承而来的方法，apply()和call()。
function sum(num1, num2){
    console.log(flag);
    return num1 + num2;
}
function callSum1(num1, num2){
    return sum.apply(this, arguments); // 传入arguments 对象
}
function callSum2(num1, num2){
    return sum.apply(this, [num1, num2]); // 传入数组
}
function callSum3(num1, num2){
    var kao = function(num1,num2){ return sum.call(this, num1, num2);}
    return kao(num1,num2);
    //return sum.call(this, num1, num2);
}

var a = function (num1,num2){
    var flag = 1;
    console.log(callSum3(num1,num2));
}

a(10,10);
//var flag = 0;
// console.log(callSum1(10,10)); //20
// console.log(callSum2(10,10)); //20
//console.log(kao(10,10)); //20

// 首先，我们定义了一个sum()函数，就是返回两个数的和
// 然后，分别在callSum1，callSum2，callSum3 的上下文中调用。
// 这两个函数除了传入参数有些差别外，返回值是一样的，
// apply，函数，强制传入上下文call给被调用函数，也就是给书上说的
// 在特定的作用域中调用函数   总结的真好
// 然后，console.log(callSum3(10,10));   我是在最顶层调用的
// 所以在callSum中的作用域为windows，

