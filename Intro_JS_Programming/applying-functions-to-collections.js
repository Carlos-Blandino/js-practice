/*
    Using forEach() and comparing to for of 
*/
const nums = [ 30, 32, 34, 36, 38, 40, 42, 44, 46, 51 ];
let totalSum = 0;

// don't forget you have the optional index argument available
// accepts a callback function
// using an anonymous function
nums.forEach(function(num) {
	totalSum += num;
});

console.log(`The total sum is ${totalSum}`);

// no callback used here
for (let num of nums) {
	totalSum += num;
	console.log(totalSum);
}

/*
    Using map to create a new array from the results of a 
    callback function for each element, the original array 
    stays unchanged
*/
// use the nums array to create a new array of objects representing
// the number and whether its odd or even for each element number
const newNums = nums.map(function(num) {
	let objNum = { number: num, isEven: num % 2 === 0 };
	return objNum;
});
console.log(newNums);

const strings = [ 'rip', 'diy', 'lol', 'dob', 'dot' ];
// create abbreviations of the string elements in strings array
const newStrings = strings.map(function(str) {
	return str.toUpperCase().split('').join('.');
});

console.log(newStrings);
