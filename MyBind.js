Function.prototype.myBind = function (...args) {
	let fn = this;
	let [context, ...args1] = args;
	return (...args2) => {
		fn.apply(context, [...args1, ...args2]);
	};
};

let ob = {
	x: 20,
};
var x = 10;

function foo(a, b, c) {
	console.log(a, b, c, this.x);
}

var f1 = foo.bind(ob, "pankaj", "boruah");
var f2 = foo.myBind(ob, "pankaj", "boruah");

f1("test");
f2("test");
