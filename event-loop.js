let a = true;
let count = 0;

//--------------PART_A--------------------
//what will be the behaviour of the while loop

setTimeout(() => {
	a = false;
}, 2000);

setInterval(() => {
	if (a) {
		console.log(count++);
	}
}, 200);

while (a) {
	if (a) console.log(count++);
}

//--------------PART_B--------------------

// let id = setInterval(() => {
// 	console.log(count++);
// }, 200);

// setTimeout(() => {
// 	clearInterval(id);
// }, 2000);

//--------------PART_C--------------------

let id = setInterval(() => {
	console.log(++count);
}, 1000);

setTimeout(() => {
	clearInterval(id);
}, 5000);

/* 
job===yes and salary>50000 or age>18

judging criteria =>
    - able to decide if open/close ended
    - logic
    - problem solving
    - JS concepts
    - React concepts
*/
