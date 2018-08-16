/**
 * @param {number[]} nums
 * @return {string}
 */
var aaa = [1,2,3,4,5,6,7];
//这其实就是一个处理字符串的问题。
var optimalDivision = function(nums) {
    if (nums.length === 1) return nums[0].toString();
    if (nums.length === 2) return nums[0]+'/'+nums[1];
    var result = '';
    var a = nums.map(function(item,index,array){
        switch (index){
            case 1 :
                return '('+item+'/';
            case array.length-1 :
                return item+')';
            default :
                return item+'/';
        }
    });
    return a.join('');
};

console.log(optimalDivision(aaa));

