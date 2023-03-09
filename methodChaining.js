let computeAmount = function () {
	let amount = 0;
	return {
		crore: function (mul) {
			amount += mul * 10000000;
			return this;
		},
		lacs: function (mul) {
			amount += mul * 100000;
			console.log(this);
			return this;
		},
		thousands: function (mul) {
			amount += mul * 1000;
			return this;
		},
		value: function () {
			return amount;
		},
	};
};

let computeObj = computeAmount();
const res = computeObj
	.lacs(15)
	.crore(5)
	.crore(2)
	.lacs(20)
	.thousands(45)
	.crore(7)
	.value();
const res2 = computeObj.lacs(15).value();
console.log(res2);
console.log(res);
