

var input = [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]];
// var reconstructQueue = function(people) {
//     var tmp = [];
//     for (var i=0;i<people.length;i++) {
//         if (!tmp[people[i][1]])
//             tmp[people[i][1]]=[];
//         tmp[people[i][1]].push(people[i]);
//     }
//     for (var i = 0;i < tmp.length;i++) {
//         tmp[i] = orderList(tmp[i]);
//     }
//     var result = tmp.shift();
//     while (tmp !== undefined && tmp.length != 0) {
//         var tmpp = tmp.shift();
//         if (tmpp === undefined || tmpp.length == 0) continue;
//         for (var i = 0;i < tmpp.length;i++) {
//             var count = 0;
//             for (var j = 0;j < result.length;j++) {
//                 if (tmpp[i][0] <= result[j][0]) count++;
//                 if (count > tmpp[i][1]) {
//                     result.splice(j,0,tmpp[i]);
//                     break;
//                 } else if (j == result.length-1) {
//                     result.splice(j+1,0,tmpp[i]);
//                     break;
//                 }
//             }
//         }
//     }
//     return result;
// };
// var orderList = function (list) {
//      if (!list) return undefined;
//      list.sort(function (a,b) {return a[0]-b[0]});
//     return list;
// };


//很皮的方法
var reconstructQueue = function(people) {

    people.sort((person1, person2) => {
        if(person1[0] === person2[0]) {
        return person1[1] - person2[1];
    }
    return person2[0] - person1[0];
});

    for(let i = 0; i < people.length; i++) {
        let temp = people[i];
        let curr;
        for(let j = people[i][1]; j <= i; j++) {
            curr = people[j];
            people[j] = temp;
            temp = curr;
        }
    }

    return people;

};

//用了splice
var reconstructQueue = function(people) {

    people.sort((p1, p2) => {
        if (p1[0] !== p2[0]) {
        return p2[0] - p1[0];
    }
    return p1[1] - p2[1];
});

    const ret = [];
    people.forEach(ppl => {
        ret.splice(ppl[1], 0, ppl);
});
    return ret;
};
console.log(reconstructQueue(input));