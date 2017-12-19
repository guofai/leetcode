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
alert(book.edition); //2

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
    alert(this.name);
};
var person1 = new Person();
person1.sayName(); //"Nicholas"
var person2 = new Person();
person2.sayName(); //"Nicholas"
alert(person1.sayName == person2.sayName); //true

// 从头开始分析，就是有个构造函数Person()   但是是空的，
// 只要有一个新函数之后，就会有一个prototype的属性，
// 这个属性里面存的是一个指针，指向原型对象
// 在这个原型对象中，也就是Person.prototype中，有一个constructor属性，又指回了构造函数，也就是Person。
// 在Person.prototype中，也只有constructor属性是根据构造函数而来的。其他的属性都是继承于Object。
// 于是，继续向Person的原型函数中，添加属性，name，age，job，sayName()；
// 然后，创建Person的实例的时候，person1和person2都有一个内部属性[[Prototype]]，这个属性指向了Person()的构造函数，但是跟Person()没有直接的关系
// 并且，在所有的实现中，都不能访问到实例的内部属性,
// 但可以通过isPrototypeOf()方法来确定对象之间是否存在这种关系。从本质上讲，如果[[Prototype]]指向调用isPrototypeOf()方法的对象（Person.prototype），那么这个方法就返回true，
alert(Person.prototype.isPrototypeOf(person1)); //true
alert(Person.prototype.isPrototypeOf(person2)); //true