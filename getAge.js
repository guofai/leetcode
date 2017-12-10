
/**
 * 方法说明 通过生肖计算年龄
 * @method getBirthday()
 * @for 所属类名
 * @param {string}  zodiac 生肖
 * @return {array} 可能的出生年份
 */
function getBirthday(zodiac) {
    var birthday = [];
    var zodiacBirthday = {'鼠' : 2008, '牛' : 2009, '虎' : 2010, '兔' : 2011,
                          '龙' : 2012, '蛇' : 2013, '马' : 2014, '羊' : 2015,
                          '猴' : 2016, '鸡' : 2017, '狗' : 2018, '猪' : 2019};
    if (typeof zodiacBirthday[zodiac] === 'undefined') return [];
    for(var i = -7;i < 1;i++){
        birthday.push(zodiacBirthday[zodiac] + 12 * i);
    }
    return birthday;
}

/**
 * 方法说明 出生年份计算年龄
 * @method getAge()
 * @for 所属类名
 * @param {num}  birthday 生日
 * @return {num} 年龄
 */
function getAge(birthday) {
    var now = new Date();
    return now.getFullYear() - (birthday||1993);
}
/**
 * 方法说明 生肖计算可能年龄
 * @method getPossibleAge()
 * @for 所属类名
 * @param {string}  zodica 生肖
 * @return {array} 可能的年龄
 */
function getPossibleAge(zodica) {
    return getBirthday(zodica).map(getAge);
}
console.log(getPossibleAge('鸡')); // [ 84, 72, 60, 48, 36, 24, 12, 0 ]
// console.log(getPossibleAge('羊')); // [ 86, 74, 62, 50, 38, 26, 14, 2 ]
// console.log(getPossibleAge('马')); // [ 87, 75, 63, 51, 39, 27, 15, 3 ]
// console.log(getPossibleAge('鼠')); // [ 93, 81, 69, 57, 45, 33, 21, 9 ]
// console.log(getPossibleAge('蛇')); // [ 88, 76, 64, 52, 40, 28, 16, 4 ]
// 这就很令人惆怅了。。。


