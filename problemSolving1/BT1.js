const BT1 = {}

var arrayA = [1, 2, 3, 1, 4, 2, 5];
var arrayB = [2, 6, 8, 3, 5, 9];
var array = arrayA.concat(arrayB);

var arrFilter = array.filter((item, index) => array.indexOf(item) === index);

var arrFilter = array.filter(function (item, index) {
    return array.indexOf(item) === index;
});
var arrDel = array.filter(function (j, index) {
    return array.indexOf(j) !== index;
});
for (var item = 0; item < arrFilter.length; item++){
    for(var j=0; j<arrDel.length; j++){
        if (arrFilter[item]==arrDel[j])
        arrFilter.splice(j, 0)
    }
    
}

console.log(arrFilter);


// const BT1 = {}
// var arrayA = [1, 2, 3, 1, 4, 2, 5];
// var arrayB = [2, 6, 8, 3, 5, 9];
// var c = arrayA
// for(var i=0; j<arrayB.length; i++){
// 	for(var j=0; j<c.length; j++){
// 		var flag = 1;
// 			if (c[j] == arrayB[i])
// 			{
// 				alert(i);
// 				flag = 0;
// 				break;
// 			}
// 		if(flag==1)
// 			c.push(arrayB[i])
// 		else
// 		{
// 			c.splice(array.indexOf(arrayB[i]),1)
// 		}
// 	}
// }