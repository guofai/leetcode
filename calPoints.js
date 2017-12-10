var calPoints = function(ops) {
    var i = 0,j = 0;
    var points = [];
    while (i < ops.length) {
        switch (ops[i]){
            case 'C' :
                j--;
                points[j] = 0;
                break;
            case 'D' :
                points[j] = points[j-1] * 2;
                j++;
                break;
            case '+' :
                points[j] = points[j-1] + points[j-2];
                j++;
                break;
            default :
                points[j] = parseInt(ops[i]);
                j++;
                break;
        }
        i++;
    }
    return sumNums(points);
};

var sumNums = function (nums) {
    var sum = 0;
    for(var i = 0;i < nums.length;i++){
        sum+=nums[i];
    }
    return sum;
};

var nums = ["36","28","70","65","C","+","33","-46","84","C"];
var nums1 = [0,1,2,3,4,5,8,6,8];
console.log(calPoints(nums));
console.log('5' + '2');
console.log(nums[0]+nums[1]);