// this + arrow function
// what would be the output here?
// how to make this work?
const user = {
	firstName: "",
	lastName: "",
	setName: function (name) {
		const splitName = function (name) {
			this.firstName = name.split(" ")[0];
			this.lastName = name.split(" ")[1];
		};
		splitName(name);
	},
};

user.setName("john doe");
console.log(user.firstName);

//closures
// let a = () => {
// 	let inner = 5;
// 	return (passed) => {
// 		console.log(inner + passed);
// 	};
// };

// let temp = a();
// temp(2);

//setTimeout + closures + scoping
//create a clock to print 1-5 after 1 second each

//sol-1: replace var with let
// let clock_1 = () => {
// 	for (var i = 1; i <= 5; i++) {
// 		setTimeout(() => {
// 			console.log(i);
// 		}, i * 1000);
// 	}
// };
// clock_1();

//sol-2
// let clock_2 = () => {
// 	for (var i = 1; i <= 5; i++) {
// 		function close(x) {
// 			setTimeout(() => {
// 				console.log(x);
// 			}, x * 1000);
// 		}
// 		close(i);
// 	}
// };
// clock_2();

//sol-3
// let clock_3 = () => {
// 	function close(x) {
// 		setTimeout(() => {
// 			console.log(x);
// 		}, x * 1000);
// 	}
// 	for (var i = 1; i <= 5; i++) {
// 		close(i);
// 	}
// };
// clock_3();

/*
Query builder:
	(Age > 18 && (graduationMarks > 60 || entranceExam >80))
*/

let user = {
	userId: 100,
	personalDetails: {
		firstName: "John",
		lastName: "Doe",
		address: {
			state: "Maharashtra",
			city: "Mumbai",
			country: "India",
		},
	},
};

/* 
	userId: 100,
	personalDetails.firstName: "John"
	personalDetails.firstName: "Doe"
	personalDetails.address.state: "Maharashtra"
	personalDetails.address.city: "Mumbai"
	personalDetails.address.country: "India"
*/

// determine if number is power of 2
// input: 32
//

// ----------------------------------------------------------------------------------------------------------
// find bugs and resolve them

useEffect(() => {
	window.addEventListener("resize", () => {
		setLightSaber(pos);
	});
	return window.removeEventListener("resize", () => {
		setLightSaber(pos);
	});
}, [pos]);

/* 
const foo = useCallback(() => {
    setLightSaber(pos);
}, [])

useEffect(() => {
    window.addEventListener('resize', foo);
    return () => window.removeEventListener('resize', foo);
});
*/

// -----------------------------------------------------------------------------------------------------------
// output
var a = 10;
let b = 10;
c = 10;
function fun() {
	var a = 20;
	let b = 20;
	c = 20;
	console.log(a, b, c);
}
console.log(a, b, c);
fun();
console.log(a, b, c);

//-------------------------------------------------------------------------------------------------------------

let a;
{
	let b;
}

function a() {
	let x = 10; //-> window.x = 10
	function b() {
		let x = 20;
	}
	console.log(x);
}
console.log(x);
// x ?

var x = 10;
console.log(window.x);

//-------------------------------------------------------------------------------------------------------------
//can we make this run exactly after delay regardless of the call stack
setTimeout(() => {
	console.log("hello world");
}, 1000);

//-------------------------------------------------------------------------------------------------------------
//implement waitFor
waitFor(5).then(() => {
	console.log("hello");
});

// function waitFor(delay) {
//   return new Promise((resolve)=> {
// 		setTimeout(() => resolve(), delay)
// 	})
// }
