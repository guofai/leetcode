
function MyCalendar() {
    var calendar = [Number.MIN_VALUE,Number.MAX_VALUE];
    var createNew = function(){
        return new MyCalendar();
    }
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    console.log(this.calendar);
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = Object.create(MyCalendar).createNew()
 * var param_1 = obj.book(start,end)
 */

var a = Object.create(MyCalendar).createNew();
console.log(a.book(1,1));

//完全找不到北，还是在回去看第五章吧。。。