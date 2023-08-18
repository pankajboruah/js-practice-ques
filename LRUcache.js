/* 
LRU cache takes a max value(number) as argument. Max defines the maximum number of {key, value} pair stored at a time. 
While inserting a new and unique {key, value} pair when the cache is already at max capacity, it would remove the least recent 
accessed {key, value} and insert the new pair.
*/

class LruCache {
	constructor(max) {
		this.max = max;
		this.cache = new Map();
	}

	get(key) {
		let item = this.cache.get(key);

		if (item !== undefined) {
			this.cache.delete(key);
			this.cache.set(key, item);
		}

		return item;
	}

	set({ key, value }) {
		let item = this.cache.get(key);
		if (item !== undefined) {
			this.cache.delete(key);
		} else if (this.cache.size === this.max) {
			// remove the least recently used {key, value}
			this.cache.delete(this.getFirst());
		}
		this.cache.set(key, value);
	}

	getFirst() {
		let iterator = this.cache.keys();
		return iterator.next().value;
	}
}

const newCache = new LruCache(3);

newCache.set({ key: "name", value: "pankaj" });
newCache.set({ key: "age", value: "25" });
newCache.set({ key: "role", value: "dev" });
newCache.set({ key: "age", value: "26" });
console.log(newCache);
newCache.set({ key: "lName", value: "boruah" });
console.log(newCache);

newCache.get("role");
console.log(newCache);
newCache.set({ key: "name", value: "pankaj" });
console.log(newCache);
