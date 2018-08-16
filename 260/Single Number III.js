/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    return nums.filter(function (value, index, array) {
        var b = 0;
        for (var i = 0;i<array.length;i++){
            if (value === array[i]){b++;}
        }
        return b===1;
    });
};



//大神的代码
// 还要配上大神的解说。。。
// 那么如何实现呢，首先我们先把原数组全部异或起来，那么我们会得到一个数字，这个数字是两个不相同的数字异或的结果，
// 我们取出其中任意一位为‘1’的位，为了方便起见，我们用 a &= -a 来取出最右端为‘1’的位，
// 然后和原数组中的数字挨个相与，那么我们要求的两个不同的数字就被分到了两个小组中，
// 分别将两个小组中的数字都异或起来，就可以得到最终结果了
var singleNumber = function(nums) {

    var axb = nums.reduce((cur, prev) => cur^prev);
// 6： 0000 0000 0000 0110
// -6：1111 1111 1111 1010
// 2:  0000 0000 0000 0010
    var diff = axb & -axb;

    var out = [0, 0];

    for(let i=0; i<nums.length; i++){
        console.log(nums[i],diff,nums[i]&diff);
        if(nums[i]&diff) out[0] ^= nums[i];
        else out[1] ^= nums[i];
    }


    return out;
}
// 甘拜下风，佩服佩服。
console.log(singleNumber( [1, 2, 1, 3, 2, 5]));



