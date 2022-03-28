/* 
We have to find the maximum possible value using numbers from 0 - 9 without repetition, 
where we pass a pattern like "iddi" or "iidd". Here i means increment and d means decrement.
So the number we create will satisfy this pattern
E.g
For a given pattern iddi
89756 is the maximum value
So the first letter is i so,
8 should increment with any value
And then the second letter is d so now
9 should decrement but as 8 is used we will use 7
In this way, the next number will either increment or decrement based on the pattern
*/

const pattern = "iidii";
const maxPossible = "9876543210";

const shiftToLeft = (input, startIndex, times) => {
	let res = Array.from(input);
	let temp = res.splice(startIndex, 1);
	res.splice(startIndex - times, 0, temp);
	return res.join("");
};

const findMaxPossible = (pattern) => {
	let res = maxPossible.slice(0, pattern.length + 1);
	let count_i = 0;
	for (let i = 0; i < pattern.length; i++) {
		if (pattern[i] == "d") {
			count_i = 0;
			continue;
		}
		++count_i;
		res = shiftToLeft(res, i + 1, count_i);
	}
	return res;
};

console.log(findMaxPossible(pattern));
