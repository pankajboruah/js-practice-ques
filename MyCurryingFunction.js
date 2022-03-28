console.log(sum(1)(2)(3)());

function sum(arg1) {
	return function (arg2) {
		if (arg2 == undefined) {
			return arg1;
		}
		return sum(arg1 + arg2);
	};
}
