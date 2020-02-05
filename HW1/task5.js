function btnClick() {
	var x, y, operator, result, form = document.formCl;

	x = Number(form.numX.value);
	y = Number(form.numY.value);
	operator = form.ope.value;

	var operations = {
		"+": (a, b) => a + b,
		"-": (a, b) => a - b,
		"*": (a, b) => a * b,
		"/": (a, b) => a / b,
	};

	if(operator in operations) {
		result = operations[operator](x, y);
	} else {
		result = "Wrong input";
	}

	console.log(x, operator, y, result);

	document.getElementById("das").textContent = `${x} ${operator} ${y} = ${result}`;
};
