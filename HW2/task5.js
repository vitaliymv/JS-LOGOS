var arr = [1, 2, 5, 7, 9, 6];
function filterRange(arr, a, b) {
	var resultArray = [];
	for (i=0; i < arr.length; i++) {
		if ( arr[i] >= a && arr[i] <=b ) {
			resultArray.push(arr[i]);
		}
	}
	return resultArray;
}
console.log(filterRange(arr, 1, 5));
