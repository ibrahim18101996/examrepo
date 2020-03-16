'use strict'
function greaterThan(arr,a){
    var cont=0;
for (var i=0 ;i<arr.length;i++){
if (arr[i]>a){
cont++;
}
}
console.log(cont);
return cont;
}
greaterThan([5,7,6,3,2],3);