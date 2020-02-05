var arr = [];
for ( var i = 0; i < 30; i++ ) {
	arr.push(Math.round(Math.random() * 150) - 50);//1
}
console.log('Дефолтний маисв: ');
console.log(arr);

function compareNumeric(a, b) {
  return a - b
}

arr.sort(compareNumeric);

console.log('За зростанням: ');//2
console.log(arr);

console.log('За спаданням: ');//3
console.log(arr.reverse())

var arrpos = [];//4
var arrneg = [];
for(var i = 0; i < arr.length; i++) {
  if (arr[i] >= 0) {
    arrpos.push(arr[i])
  } else {
    arrneg.push(arr[i])
  }
}
console.log('Масив тільки з позитивними значеннями: ');
console.log(arrpos);
console.log('Масив тільки з негативними значеннями: ');
console.log(arrneg);
