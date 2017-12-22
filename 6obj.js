// 创建一个object的实例
var person = new Object();
// 添加一些属性
person.name = 'guoshuai';
person.age = 25;
person.sayname = function () {
    console.log(this.name);
}
person.sayname();
// console.log(person);    // { name: 'guoshuai', age: 25 }
// 6.1.1属性类型
// 分两种
// 1.数据属性     就是，这个属性有一个属性专门存的是值
// [[Value]]：包含这个属性的数据值。读取属性值的时候，从这个位置读；写入属性值的时候，
// 把新值保存在这个位置。这个特性的默认值为undefined。
// 然后，其他的三个位子存的是能否对上面这个值的更改，接近于javascript引擎底层运行
// [[Configurable]]：表示能否通过delete 删除属性从而重新定义属性，能否修改属性的特
// 性，或者能否把属性修改为访问器属性。像前面例子中那样直接在对象上定义的属性，它们的
// 这个特性默认值为true。
// [[Enumerable]]：表示能否通过for-in 循环返回属性。像前面例子中那样直接在对象上定
// 义的属性，它们的这个特性默认值为true。
// [[Writable]]：表示能否修改属性的值。像前面例子中那样直接在对象上定义的属性，它们的
// 这个特性默认值为true。
// 此外，还有另一种属性，现在觉得更像是一种接口
var book = {
    _year: 2004,
    edition: 1
};
Object.defineProperty(book, "year", {
    get: function(){
        return this._year;
    },
    set: function(newValue){
        if (newValue > 2004) {
            this._year = newValue;
            this.edition += newValue - 2004;
        }
    }
});
book.year = 2005;
console.log(book.edition); //2

// 在此处，数据属性有两个 _year，edition ，他们的上述value值就为2004，1，然后另外三个特性值为默认的true
// 但是，又定义了一个year属性。
// 2.访问器属性
// 没有数据值，但是有一对不是必须的getter 和setter 函数，在读取访问器属性时，会调用getter 函数，这个函数负责返回有效的值；在写入访问器属性时，会调用
// setter 函数并传入新值，这个函数负责决定如何处理数据。
// [[Configurable]]：表示能否通过delete 删除属性从而重新定义属性，能否修改属性的特
// 性，或者能否把属性修改为数据属性。对于直接在对象上定义的属性，这个特性的默认值为
// true。
// [[Enumerable]]：表示能否通过for-in 循环返回属性。对于直接在对象上定义的属性，这
// 个特性的默认值为true。
// [[Get]]：在读取属性时调用的函数。默认值为undefined。
// [[Set]]：在写入属性时调用的函数。默认值为undefined。
// 访问器属性不能直接定义，必须使用Object.defineProperty()来定义。


function Person(){
}
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function(){
    console.log(this.name);
};
var person1 = new Person();
person1.sayName(); //"Nicholas"
var person2 = new Person();
person2.sayName(); //"Nicholas"
console.log(person1.sayName == person2.sayName); //true

// 从头开始分析，就是有个构造函数Person()   但是是空的，
// 只要有一个新函数之后，就会有一个prototype的属性，
// 这个属性里面存的是一个指针，指向原型对象
// 在这个原型对象中，也就是Person.prototype中，有一个constructor属性，又指回了构造函数，也就是Person。
// 在Person.prototype中，也只有constructor属性是根据构造函数而来的。其他的属性都是继承于Object。
// 于是，继续向Person的原型函数中，添加属性，name，age，job，sayName()；
// 然后，创建Person的实例的时候，person1和person2都有一个内部属性[[Prototype]]，这个属性指向了Person()的构造函数，但是跟Person()没有直接的关系
// 并且，在所有的实现中，都不能访问到实例的内部属性,
// 但可以通过isPrototypeOf()方法来确定对象之间是否存在这种关系。从本质上讲，如果[[Prototype]]指向调用isPrototypeOf()方法的对象（Person.prototype），那么这个方法就返回true，
console.log(Person.prototype.isPrototypeOf(person1)); //true
console.log(Person.prototype.isPrototypeOf(person2)); //true
person1.name = 'guoshuai';
person1.sayName();  // guoshuai - 来自实例
console.log(person1.hasOwnProperty('name'));// true    对吧，是实例自己的属性
person2.sayName();  // Nicholas - 来自原型
console.log(person2.hasOwnProperty('name'));// false    对吧，是不知道从那个鬼原型里面找出来的属性

delete person1.name; // 将实例中的属性删除
person1.sayName();  // Nicholas - 来自原型
console.log(person1.hasOwnProperty('name'));//false    对吧，你把人家实例里面的属性删了，只能瞎几把找了。
person2.sayName();  // Nicholas - 来自原型
console.log(person2.hasOwnProperty('name'));//false    我无话可说。跟以前一个吊样

//in 操作符
//  这里，分单独使用，还是在for-in循环中使用。
//  第一种演示，单独使用的时候
console.log('name' in person1); //true    看见了没，不管三七二十一，不管你在那个旮旯里，只要你有，就返回true，
//  然后根据上面的方式，就有了一种骚操作
function hasPrototypeProperty(object, name){
    return !object.hasOwnProperty(name) && (name in object);
}
//  是吧，只看你原型里的属性的话，就好了。
console.log(hasPrototypeProperty(person1,'name')); // true  对吧，是原型里面的属性。
person1.name = 'guoshuai';
console.log(hasPrototypeProperty(person1,'name')); //false  对吧，那个与操作的第一项就返回了false，我无话可说。
//然后，第二种用法  for-in中的使用
//先来看官方说明：，返回的是所有能够通过对象访问的、可枚举的（enumerated）属性，其中
// 既包括存在于实例中的属性，也包括存在于原型中的属性。
// 屏蔽了原型中不可枚举属性（即将[[Enumerable]]标记为false 的属性）的实例属性也会在for-in 循环中返回，因为根据规定，所有开发人员定义的属性都是可枚举的
var key = [];
for(var prop in person1){
    key.push(prop);
}
console.log(key); // [ 'name', 'age', 'job', 'sayName' ]  看见了吧，你有啥爷全能给你弄出来。

//  还有一种人家提供好的方法Object.keys()
// 这个方法接收一个对象作为参数，返回一个包含所有可枚举属性的字符串数组。
console.log(Object.keys(person1)); // [ 'name' ] 只返回了实例自己的属性。
console.log(Object.keys(Person)); // []   很没有毛病，Person的原型函数是空的嘛。
console.log(Object.keys(Person.prototype)); // [ 'name', 'age', 'job', 'sayName' ] 这就无话可说了吧。

// 更加简单的原型语法。
function Student(){
}
Student.prototype = {
    name : 'guoshuai',
    age : '25',
    class : '47班',
    sayName : function(){
        console.log(this.name);
    }
};
// 但是这么做,相当于重写Student.prototype
// 于是，Student.prototype中的constructor属性不会再指回原型函数Student。

function Person(){
}
Person.prototype = {
    constructor : Person,
    name : "Nicholas",
    age : 29,
    job: "Software Engineer",
    sayName : function () {
        alert(this.name);
    }
};

// 像这样，直接将constructor指回Person，但是，这样做会让constructor属性的[[Enumerable]]特性值变为true，也就是可枚举。
// 在使用ECMAScript5兼容的JavaScript引擎，可以用Object.defineProperty()。来定义
function Person(){
}
Person.prototype = {
    name : "Nicholas",
    age : 29,
    job : "Software Engineer",
    sayName : function () {
        console.log(this.name);
    }
};

//重设构造函数，只适用于ECMAScript 5 兼容的浏览器
Object.defineProperty(Person.prototype, "constructor", {
    enumerable: false,
    value: Person
});
//以上这些都是细枝末节了
var my = new Person();
my.sayName();
//   而且，重写原型对象时候，不会改变之前已经初始化好的实例中的prototype
function Person(){
}
var her = new Person();
Person.prototype = {
    name : "shuaibi",
    age : 29,
    job : "Software Engineer",
    sayName : function () {
        console.log(this.name);
    }
};
her.sayName(); //TypeError: her.sayName is not a function

//  这种原型对象，优点同样也是缺点，
//  优点是共享函数时候，可以修改prototype中方法达到修改所有实例的方法，尽管，属性值可以被实例中自己的属性给覆盖掉
//  但是，对于引用值来说，就很操蛋了。
function Person(){
}
Person.prototype = {
    constructor: Person,
    name : "Nicholas",
    age : 29,
    job : "Software Engineer",
    friends : ["Shelby", "Court"],
    sayName : function () {
        alert(this.name);
    }
};
var person1 = new Person();
var person2 = new Person();
// person1.friends.push("Van");
console.log(person1.friends); //"Shelby,Court,Van"
console.log(person2.friends); //"Shelby,Court,Van"
console.log(person1.friends === person2.friends); //true
// 上述中，很没有毛病，建了两个实例，但是，原型中有friends是引用值。
// 在一个实例中修改的话，就会导致另一个实例中的对应值被修改。
// 6.2.4 组合使用构造函数模式和原型模式
function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = ["Shelby", "Court"];
}
Person.prototype = {
    constructor : Person,
    sayName : function(){
        alert(this.name);
    }
}
var person1 = new Person("Nicholas", 29, "Software Engineer");
var person2 = new Person("Greg", 27, "Doctor");
// person1.friends.push("Van");
console.log(person1.friends); //"Shelby,Count,Van"
console.log(person2.friends); //"Shelby,Count"
console.log(person1.friends === person2.friends); //false
console.log(person1.sayName === person2.sayName); //true

// 此种方法，构造函数里面定义实例的属性，原型模型里面定义共享函数和共享方法。
// 6.2.5 动态原型模式
function Person(name, age, job){
//属性
    this.name = name;
    this.age = age;
    this.job = job;
    //方法
    if (typeof this.sayName != "function"){
        Person.prototype.sayName = function(){
            console.log(this.name);
        };
    }
}
var friend = new Person("Nicholas", 29, "Software Engineer");
friend.sayName();

// 当代码 new Foo(...) 执行时：
//
//     1.一个新对象被创建。它继承自Foo.prototype。
//     2.使用指定的参数调用构造函数Foo，并将 this绑定到新创建的对象。new Foo 等同于 new Foo()，只能用在Foo 不传递任何参数的情况。
//     3.如果构造函数返回了一个“对象”，那么这个对象会取代整个new出来的结果。如果构造函数没有返回对象，那么new出来的结果为步骤1创建的对象。（一般情况下构造函数不返回任何值，不过用户如果想覆盖这个返回值，可以自己选择返回一个普通对象来覆盖。当然，返回数组也会覆盖，因为数组也是对象。）

// 6.2.6 寄生构造函数模式
function Person(name, age, job){
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function(){
        console.log(this.name);
    };
    return o;
}
var friend = new Person("Nicholas", 29, "Software Engineer");
friend.sayName(); //"Nicholas"

//基本上了，就把一个对象弄好了给你返回过来。

function SpecialArray(){
//创建数组
    var values = new Array();
//添加值
    values.push.apply(values, arguments);
//添加方法
    values.toPipedString = function(){
        return this.join("|");
    };
//返回数组
    return values;
}
var colors = new SpecialArray("red", "blue", "green");
console.log(colors.toPipedString()); //"red|blue|green"

//这样玩，可以为new出来的values数组，单独添加一个新的方法，别的Array对象都没有的哟。
//但是，这样玩，返回的实例values跟SpecialArray构造函数一毛钱关系都没有。
// 6.2.7 稳妥构造函数模式
function Person(name, age, job){
//创建要返回的对象
    var o = new Object();
    //可以在这里定义私有变量和函数
//添加方法
    o.sayName = function(){
        console.log(name);
    };
//返回对象
    return o;
}
var friend = Person("Nicholas", 29, "Software Engineer");
friend.sayName(); //"Nicholas"
console.log(friend.name);//undefined
//但有两点不同：一是新创建对象的实例方法不引用this；二是不使用new 操作符调用构造函数。


function Process (nameF ) {
    var o = new Object();
    var name = nameF;
    o.sayName = function(){
        console.log(name);
    };
    return o;
}

var friend = Process('Nick');
friend.sayName();  //"Nick"
console.log(friend.name);//undefined

// 作者：睘羽
// 链接：https://www.zhihu.com/question/25101735/answer/152265936
//     来源：知乎
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

// 就像知乎上这位的代码，使用了闭包的作用域，在sayName中可以访问到nameF，name，但是在全局中是访问不到的，这就有了私有变量。


//6.3继承
function SuperType(){
    this.property = true;
}
SuperType.prototype.getSuperValue = function(){
    return this.property;
};
function SubType(){
    this.subproperty = false;
}
//继承了SuperType
SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function (){
    return this.subproperty;
};
var instance = new SubType();
console.log(instance.getSuperValue()); //true
console.log(instance.getSubValue()); //false

//首先，有一个构造函数，有一个属性property = true，然后此构造函数的原型添加上getSuperValue方法，
// 然后又建了一个构造函数，有自己的属性，将自己的原型指向SuperType的实例，又添加了方法，可以认为SubType继承了SuperType。
// 要注意instance.constructor 现在指向的是SuperType，这是因为原来SubType.prototype 中的constructor 被重写了的缘故

// 2. 确定原型和实例的关系
// 可以通过两种方式来确定原型和实例之间的关系。第一种方式是使用instanceof 操作符，只要用
// 这个操作符来测试实例与原型链中出现过的构造函数，结果就会返回true。以下几行代码就说明了这
// 一点。
console.log(instance instanceof Object); //true
console.log(instance instanceof SuperType); //true
console.log(instance instanceof SubType); //true
// 由于原型链的关系，我们可以说instance 是Object、SuperType 或SubType 中任何一个类型
// 的实例。因此，测试这三个构造函数的结果都返回了true。
// 第二种方式是使用isPrototypeOf()方法。同样，只要是原型链中出现过的原型，都可以说是该
// 原型链所派生的实例的原型，因此isPrototypeOf()方法也会返回true，如下所示。
console.log(Object.prototype.isPrototypeOf(instance)); //true
console.log(SuperType.prototype.isPrototypeOf(instance)); //true
console.log(SubType.prototype.isPrototypeOf(instance)); //true

// 两种方法，嗯，过来过去的，原型与实例换个位置
