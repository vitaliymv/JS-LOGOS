function find(array, value) {
  if (array.indexOf) {
    return array.indexOf(value);
  }
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) return i;
  }
  return -1;
}
var arr = ["a", -1, 2, "b"];
var index = find(arr, 2);
console.log('Індекс заданого елементу: ' + index);
