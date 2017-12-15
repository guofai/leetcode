/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

//temperatures = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0]
var dailyTemperatures = function(temperatures) {
    return temperatures.map(function (item,index,array){
        var b = index;
        var c = 0;
        while (b < array.length){
            if(item >= array[b]) {
                c++;
            }else {
                return c;
            }
            b++;
        }
        if (array.length - index === c) c=0;
        return c;
    });
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));

//然并卵，Sorry. We do not have enough accepted submissions to show runtime distribution chart.
//哇，爆装备了。