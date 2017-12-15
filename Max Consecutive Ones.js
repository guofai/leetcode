/**
 * @param {number[]} nums
 * @return {number}
 */
//给定一个二进制数组，求最大连续的1的个数；
var findMaxConsecutiveOnes = function(nums) {
    var a = nums.join('').split('0').map(function (item) {
        return item.length;
    });
    a = Math.max.apply(null,a);
    return a;
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1,1]));

//大神的代码  遍历一次数组，嗯，很没有毛病。
var findMaxConsecutiveOnes = function(nums) {
    var count=0,max= 0
    for(var i=0,len=nums.length;i<len;i++){
        if(nums[i]===0){
            if(count>max) max=count
            count=0
        }else{
            count++
        }
    }
    return max>count? max:count
};