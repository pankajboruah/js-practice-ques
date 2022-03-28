//Input     - [1, 5, 3, 2], [9, 9, 9]
//expected  - [1, 5, 3, 3], [1, 0, 0, 0]
let incrementAtIndex = (arr, input, index) => {
	arr[index] = (input[index] + 1) % 10;
};

let getNextNumber = (input) => {
	let res = [...input];
	let length = input.length;
	for (let i = length - 1; i >= 0; i--) {
		incrementAtIndex(res, input, i);
		if (input[i] == 9) {
			if (i === 0) {
				res.splice(i, 0, 1);
			}
			continue;
		} else {
			break;
		}
	}
	return res;
};

console.log(getNextNumber([1, 9, 9, 7, 9]));
