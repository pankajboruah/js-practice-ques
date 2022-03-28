let container = document.querySelector("#root");

const input1 = document.createElement("input");

const printData = (e) => {
	console.log(e.target.value);
};

const debouncedPrintData = function (fn, delay) {
	let timer;
	return function () {
		clearTimeout(timer);
		timer = setTimeout(() => {
			fn.apply(this, arguments);
		}, delay);
	};
};

input1.setAttribute("type", "text");
input1.setAttribute("placeholder", "Debounced Search...");
input1.addEventListener("keyup", debouncedPrintData(printData, 500));
container.appendChild(input1);
