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

/*
	Using find() array method to locate and return first matching the criteria
*/

let phrases = [
	'Happy birthday',
	'go home',
	"It's not late",
	"Don't give up",
	'Nice weather',
	'Nice dog',
	"It's falling apart"
];

const nicePhrases = phrases.find((phrase) => phrase.indexOf('Nice') === 0);

const goPhrase = phrases.find((phrase) => phrase.includes('go'));

/*
	Using filter() method to create a new array from the results of a 
    callback function for each element, the original array 
    stays unchanged	
*/
// array of odd numbers
let oddArray = nums.filter((num) => num % 2 === 1);
// numbers greater than 38 and not an odd number
let greaterThan38 = nums.filter((num) => num > 38 && num % 2 !== 1);

/*
	Using every() method to test whether all elements in the array pass
	the callback function conditions
*/

const fourLetterWords = [ 'donk', 'honk', 'tonk', 'monk', 'konk', 'donky' ];
let isThreeChars = fourLetterWords.every((str) => str.length === 3);
console.log(isThreeChars);
//verses some() which passes true if only one element passes condition
let isThreeChars2 = fourLetterWords.some((str) => str.length === 5);
console.log(isThreeChars2);

// check every element in array if it ends with 'k'
let isLastCharD = fourLetterWords.every(
	(char) => char[char.length - 1] === 'k'
);
console.log(isLastCharD);

/*
	Sort() method
*/
// used the slice() method to make a copy so as to not mutate the array
let newNums2 = nums.slice().sort((a, b) => b - a);
console.log(newNums2);
console.log(nums);

/* 
	Using reduce() method to reduce data to something more specific
*/

const accumulator = nums.reduce((previousVal, currentVal, currentIndex) => {
	console.log(`current index is: ${currentIndex}`);
	return previousVal + currentVal;
});
console.log(accumulator);

const findMax = nums.reduce((previousVal, currentVal) => {
	if (currentVal > previousVal) return currentVal;
	return previousVal;
});
console.log(`max value is ${findMax}`);

const findMin = nums.reduce((prevVal, currentVal) => {
	return Math.min(prevVal, currentVal);
});

console.log(`min val is: ${findMin}`);
