
// function TreeNode(val) {
//     this.val = val;
//     this.left = this.right = null;
// }
// var constructMaximumBinaryTree = function(nums) {
//     if (nums.length>0){
//         var j = max(nums);
//         var end = new TreeNode(j.maxnum);
//         end.left = constructMaximumBinaryTree(nums.slice(0,j.maxindex));
//         end.right = constructMaximumBinaryTree(nums.slice(j.maxindex+1));
//         return end;
//     } else {
//         return null;
//     }
//
// };
// var max = function(nums) {
//     var maxnum = 0;
//     var maxindex = 0;
//     for (var i = 0;i < nums.length;i++){
//         if (nums[i] > maxnum) {
//             maxnum = nums[i];
//             maxindex = i;
//         }
//     }
//     return {
//         maxnum : maxnum,
//         maxindex : maxindex
//     };
// };
// console.log(constructMaximumBinaryTree(num));

// var arrayPairSum = function(nums) {
//     var scum = 0;
//     var flag = 1;
//     var j = 0;
//     var i = 0;
//     for(i = 0;i < nums.length;i++){
//         for( j= 0;j < nums.length - i;j++){
//             if(nums[j] < nums[j+1]){
//                 tmp = nums[j];
//                 nums[j] = nums[j+1];
//                 nums[j+1] = tmp;
//             }
//         }
//         if (flag == 1) {
//             scum = scum + nums[j-1];
//             flag = 0;
//         } else {
//             flag = 1;
//         }
//     }
//     return scum;
// };
// var arrayPairSum = function(nums) {
//     var scum = 0,i = 0;
//     var flag = 1;
//     nums.sort(function(a,b){return a-b});
//     while (i < nums.length) {
//         if (flag == 1) {
//             scum = scum + nums[i];
//             i++;
//             flag = 0;
//         } else {
//             flag = 1;
//             i++;
//         }
//     }
//     return scum;
// };

/**
 * @param {number[]} nums
 * @return {number}
 * [1,2,3,4,5,6]
 *
 * 思路:
 * 1. 排序
 * 2. nums[0] + nums[2] + nums[4] + ...
 *
 * 时间复杂度:
 * O(nlogn)
 *
 */
var num = [1, 6, 4, 2 ,10 ,9, 7, 3];
var arrayPairSum = function(nums) {
    var i;
    quickSort(nums, 0, nums.length - 1);
    var sum = 0;
    for (i = 0; i < nums.length; i += 2) {
        sum += nums[i]
    }
    return sum;
};

function quickSort(nums, start, end) {
    if (start >= end) {
        return;
    }
    var left = start;
    var right = end;
    var mid = nums[start];
    var temp;
    while (left < right) {
        while (nums[right] >= mid && left < right) {
            --right;
        }
        while (nums[left] <= mid && left < right) {
            ++left;
        }
        if (left < right) {
            temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
        }
    }
    nums[start] = nums[left];
    nums[left] = mid;

    quickSort(nums, start, left - 1);
    quickSort(nums, left + 1, end);
}
console.log(arrayPairSum(num));