// let container = document.querySelector("#root");

const input2 = document.createElement("input");

const expensiveFunc = (e) => {
	console.log(e.target.value);
};

const throttledPrintData = function (fn, limit) {
	let flag = true;
	return function () {
		let context = this,
			args = arguments;
		if (flag) {
			fn.apply(context, args);
			flag = false;
			setTimeout(() => {
				flag = true;
			}, limit);
		}
	};
};

input2.setAttribute("type", "text");
input2.setAttribute("placeholder", "Throttled Search...");
input2.addEventListener("keyup", throttledPrintData(expensiveFunc, 500));
container.appendChild(input2);
