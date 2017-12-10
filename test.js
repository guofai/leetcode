// var a = [1];
// console.log(typeof a[1] === 'undefined');
// function shuaibi(){
//     var a = 110;
//
//     return 0;
// }
// console.log(shuaibi());
// var re = null,
//     i;
// re = /cat/g;
// console.log(re.global);

// var text = "wo kao mom and dad and baby";
// var pattern = /mom( and dad( and baby)?)?/gi;
// var matches = pattern.exec(text);
// console.log(pattern.lastIndex);
//  matches = pattern.exec(text);
// console.log(pattern.lastIndex);
// matches = pattern.exec(text);
// console.log(pattern.lastIndex);
// console.log(matches);

//匹配时间
// var pattern = /[12]\d{3}-[01]\d-[0-3]\d/;
// matches = pattern.test("1993-10-28"); //true
// matches = pattern.test("5993-10-28"); //false
// matches = pattern.test("1994-10-09"); //true
// console.log(matches);

// function callSomeFunction(someFunction, someArgument){
//     return someFunction(someArgument);
// }
//
// function add10(num){
//     return num + 10;
// }
// var result1 = callSomeFunction(add10, 10);
// alert(result1); //20
// function getGreeting(name){
//     return "Hello, " + name;
// }
// var result2 = callSomeFunction(getGreeting, "Nicholas");
// alert(result2); //"Hello, Nicholas"

// 此函数返回的也是一个函数的引用，function(object1, object2)，这个函数是比较两个对象的某个属性，也就是propertyName的
// 然后将其传给sort()，可以让对象数组中，按照数组中某项属性排序。
function createComparisonFunction(propertyName) {
    return function(object1, object2){
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];
        if (value1 < value2){
            return -1;
        } else if (value1 > value2){
            return 1;
        } else {
            return 0;
        }
    };
}

//此处order_by_name仍是一个方法
// var order_by_name = createComparisonFunction("name");
var order_by_age = createComparisonFunction("age");
var data = [{name: "guoshuai", age: 24}, {name: "guotong", age: 22}, {name: "songlinghui", age: 50}, {name: "guoxiaobing", age: 51}];
//不用添加圆括号来引用
data.sort(order_by_age);
console.log(data);