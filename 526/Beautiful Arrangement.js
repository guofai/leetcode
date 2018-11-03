/**
 * @param {number} N
 * @return {number}
 */
var countArrangement = function(N){
    var a =[];
    var result = 0;
    var kao = 0;
    //构造一个顺序数组
    for (var i = 0;i<N;i++){
        a.push(i+1);
    }
    var arrangement = function(arr,restArr,i){
        if (arr.length==N) {
            result++;
            console.log(arr);
            return true;
        }
        if (i > restArr.length) {
            return false;
        }
        var index = arr.length + 1;
        // console.log(kao,arr,restArr,i,index);
        kao++;
        if (index % restArr[i] == 0 || restArr[i] % index == 0) {
            arrangement(arr,restArr,i+1);
            var tmparr = [];
            var tmprestArr = [];     
            Object.assign(tmparr,arr);
            Object.assign(tmprestArr,restArr);
            tmparr.push(restArr[i]);
            tmprestArr.splice(i,1);
            arrangement(tmparr,tmprestArr,0);
        }else{
            arrangement(arr,restArr,i+1);
        }

    }
    arrangement([],a,0);
    return result;
}

//别人的方法
var countArrangement = function(N) {
    const nums = new Array(N + 1).fill(1).map((item, idx) => idx);
    return backtrack(nums, 1);
};

var backtrack = function(nums, begin) {
    if (begin >= nums.length-1) {
        if (isBeautiful(begin, nums[begin])) {
            return 1;
        }
        return 0;
    }
    let result = 0;
    for (let i = begin; i < nums.length; i++) {
        if (isBeautiful(begin, nums[i])) {
            swap(nums, i, begin);
            result += backtrack(nums, begin+1);
            swap(nums, i, begin);
        }
    }
    return result;
}

var isBeautiful = function(i, num) {
    return (i % num === 0) || (num % i === 0); 
}

var swap = function(nums, i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

console.log(countArrangement(3));
