
var findDuplicates = function(nums) {
    var elem, i = 1;
    var duplicates = [];//new Set();
    nums.sort();
    for (;i <= nums.length; i++) {
        elem = nums[i];
        if (elem === nums[i - 1]) {
            duplicates.push(nums[i]);
        }
    }
    return unique(duplicates);
};

var unique = function (results) {
    var elem, i = 1;
    results.sort();
    for (;i <= results.length; i++) {
        elem = results[i];
        if (elem === results[i - 1]) {
            results.splice(i--, 1);
        }
    }
    return results;
};
//console.log(findDuplicates([1,1,3,3,2,2,2,3]));


//更牛皮的方法   刚看问题了有很多限定条件，1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
//Find all the elements that appear twice in this array.
var findDuplicates1 = function(nums) {
    var res=[];
    for(var i=0;i<nums.length;i++) {
        if(nums[Math.abs(nums[i])-1]<0) res.push(Math.abs(nums[i]));
        nums[Math.abs(nums[i])-1] = -1*Math.abs(nums[Math.abs(nums[i])-1]);
    }
    return res;
};
//这俩思路是一样的
var findDuplicates2 = function(arr) {
    if (arr == null)
        return;

    var res = [];
    for (var  i=0;i<arr.length;i++) {
        var index = Math.abs(arr[i]);
        if (arr[index-1]>0)
            arr[index-1] = - arr[index-1];
        else res.push(Math.abs(arr[i]));
    }

    return res;
};
console.log(findDuplicates2([4,3,2,7,8,2,3,1]));
