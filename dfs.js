//cyclic
const data = [
	["a", "b"],
	["b", "c"],
	["c", "d"],
	["e", "f"],
	["e", "c"],
	["d", "f"],
];

const d = {
	a: ["b"],
	b: ["c", "d"],
	c: ["d", "e"],
	d: ["f"],
	e: [],
	f: [],
};

const undirectedPath = (edges, src, dest) => {
	const graph = getGraph(edges);
	console.log(graph);
};

let res = "";

const hasPath = (graph, src, dest) => {
	if (src === dest) return true;

	for (let neighbor of graph[src]) {
		if (hasPath(graph, neighbor, dest)) {
			res = neighbor + res;
			return true;
		}
	}
	return false;
};

const getGraph = (edges) => {
	let res = {};
	for (let edge of edges) {
		let [nodeA, nodeB] = edge;
		if (!(nodeA in res)) res[nodeA] = [];
		if (!(nodeB in res)) res[nodeB] = [];
		res[nodeA].push(nodeB);
		res[nodeB].push(nodeA);
	}
	return res;
};

// undirectedPath(data);
console.log(hasPath(d, "a", "f"));
console.log(res);
