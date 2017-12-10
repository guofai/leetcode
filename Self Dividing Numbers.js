var selfDividingNumbers = function(left, right) {
    var nums = [];
    for(;left<=right;left++){
        if((parseInt(left/10)==0||(left%(left%10)==0))&&
           ((parseInt(left/10)%10)==0||(left%(parseInt(left/10)%10)==0))&&
           ((parseInt(left/100)%10)==0||(left%(parseInt(left/100)%10)==0))&&
           ((parseInt(left/1000)%10)==0||(left%(parseInt(left/1000)%10)==0))&&
           (parseInt(left/10000)==0||(left%parseInt(left/100)==0)))
           {
            nums.push(left);
        }
    }
    return nums;
};

//理解不了也是我的错，比如101这个数字，我就会返回，但是101%0会返回NaN，所以期望是不返回的。
// var selfDividingNumbers = function(left, right) {
//     var nums = [];
//     for(;left<=right;left++){
//         if((parseInt(left/10)==0||(left%(left%10)==0))&&
//            ((parseInt(left/10)%10)==0||(left%(parseInt(left/10)%10)==0))&&
//            ((parseInt(left/100)%10)==0||(left%(parseInt(left/100)%10)==0))&&
//            ((parseInt(left/1000)%10)==0||(left%(parseInt(left/1000)%10)==0))&&
//            (parseInt(left/10000)==0||(left%parseInt(left/100)==0))
//           ) {
//             nums.push(left);
//         }
//     }
//     return nums;
// };