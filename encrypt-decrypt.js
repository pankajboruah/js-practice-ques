/*
	Base64 encryption
	Base64 decryption
*/

const base_64 = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
	"0",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"+",
	"/",
];

const binToDecimal = (input) => parseInt(input, 2);

const decToBinary = (input) => input.toString(2);

const getAscii = (input) => input.charCodeAt(0);

const asciiToChar = (input) => String.fromCharCode(input);

const extractBinaryOfChar = (input) => {
	let res = decToBinary(getAscii(input));
	while (res.length < 8) {
		res = "0" + res;
	}
	return res;
};

const convertStrToBinary = (input) => {
	let res = "",
		temp = Array.from(input);
	for (let i = 0; i < temp.length; i++) {
		res += extractBinaryOfChar(temp[i]);
	}
	return res;
};

const encrypt = (input) => {
	let res = "";
	const padding = input.length == 1 ? "==" : input.length == 2 ? "=" : "";
	const temp =
		convertStrToBinary(input) +
		(input.length == 1 ? "0000" : input.length == 2 ? "00" : "");
	let parts = temp.match(/.{1,6}/g) || [];
	res = parts.reduce((acc, cur) => (acc += base_64[binToDecimal(cur)]), "");
	return res + padding;
};

const decrypt = (input) => {
	let res = "";
	let temp = Array.from(input).reduce((acc, cur) => {
		let x = decToBinary(base_64.indexOf(cur));
		while (6 - x.length > 0) {
			x = "0" + x;
		}
		return (acc += x);
	}, "");
	let parts = temp.match(/.{1,8}/g) || [];
	res = parts.reduce(
		(acc, cur) => (acc += asciiToChar(binToDecimal(cur))),
		""
	);
	return res;
};

const getEncrypted = (input) => {
	let parts = input.match(/.{1,3}/g) || [];
	let res = parts.reduce((acc, cur) => (acc += encrypt(cur)), "");
	return res;
};

const getDecrypted = (input) => {
	let parts = input.split("=")[0].match(/.{1,4}/g) || [];
	let res = parts.reduce((acc, cur) => (acc += decrypt(cur)), "");
	return res;
};

const input = "Pankaj";
console.log(getEncrypted(input));
console.log(getDecrypted(getEncrypted(input)));
