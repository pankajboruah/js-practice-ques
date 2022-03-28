let ar = [1, 2, 3];

Function.prototype.myMap = function (fn) {
	let res = [];
	for (let i = 0; i < this.length; i++) {
		res.push(fn(this[i]));
	}
	return res;
};
