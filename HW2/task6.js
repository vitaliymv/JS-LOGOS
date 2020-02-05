function camelize(str) {
	var wordArray = str.split('-');
	for(var i = 0; i < wordArray.length; i++)
	{
		var charArray =  wordArray[i].split("");
		charArray[0] = wordArray[i].charAt(0).toUpperCase();
		wordArray[i] = charArray.join("");
	}
	str = wordArray.join("");
  return str;
}
var strTest = "my-short-string";
console.log(camelize(strTest));
