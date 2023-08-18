let promise1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log("resolved 1");
		resolve("1");
	}, 1000);
});
let promise2 = new Promise((resolve, reject) => {
	console.log("resolved 2");
	resolve("2");
});

function myPromiseAll(promises) {
	let finalResult = [];
	let totalPromisesCompleted = 0;
	return new Promise((resolve, reject) => {
		promises.forEach((el, idx) => {
			el.then((res) => {
				finalResult[idx] = res;
				totalPromisesCompleted += 1;
				if (totalPromisesCompleted === promises.length) {
					resolve(finalResult);
				}
			}).catch((err) => {
				reject(err);
			});
		});
	});
}

myPromiseAll([promise1, promise2]).then((res) => console.log(res));
Promise.all([promise1, promise2]).then((res) => console.log(res));
