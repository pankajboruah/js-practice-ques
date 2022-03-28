const d = {
	a: ["b"],
	b: ["c", "d"],
	c: ["d", "e"],
	d: ["f"],
	e: [],
	f: [],
};

let res = "";

const hasPath = (graph, src, dest) => {
	const queue = [src];
	while (queue.length > 0) {
		let current = queue.shift();
		if (current === dest) return true;
		for (let neighbor of graph[current]) queue.push(neighbor);
	}
	return false;
};

console.log(hasPath(d, "a", "f"));
console.log(res);
