/*
	polyfill for parseInt
*/

const sanitizeAndModifyInput = (x, base) => {
	let res = [],
		j = 0;
	x = x.split(".")[0];
	for (let i = 0; i < x.length; i++) {
		if (x[i] < base) {
			res.push(x[i]);
		} else if (isNaN(+x[i]) && x[i].charCodeAt(0) - 87 < base) {
			res.push(x[i].charCodeAt(0) - 87);
		} else break;
	}
	return res;
};

const myParseInt = (x, base) => {
	console.log("expected-output => " + parseInt(x, base));
	if (base < 2 || base > 36) {
		return NaN;
	}

	let input = sanitizeAndModifyInput(x.toString().toLowerCase(), base);
	if (input.length === 0) return NaN;

	let size = input.length,
		res = 0;

	for (let i = 0; i < size; i++) {
		let temp = input.pop() * Math.pow(base, i);
		res = res + temp;
	}
	return res;
};

let input = 1100001;
let base = 2;
console.log("input => " + input);
console.log("program-output => " + myParseInt(input, base));
