// Total Reverse

// Build a function that takes in an array and reverses it

// Write a function that takes one parameter
// Parameter 1 - An array of anything
// The function should output an array that is in reverse order from the input array
// Example:
// var myArray = ['hello', 45, 'Bob', 'what', '23'];
// arrayReverse(myArray);
// Output - ['23', 'what', 'Bob', 45, 'hello']
// Avoid using pre-built functions that do something similar

var myArray = [ 'hello', 45, 'Bob', 'what', '23' ];

function reverseArray(inputArray) {
	var tempArray = [];
	var arrayLen = inputArray.length - 1;
	for (arrayLen; arrayLen >= 0; arrayLen--) {
		tempArray.push(inputArray[arrayLen]);
	}
	return tempArray;
}

function reverseAnArray(inputArray) {
	let tempArray = [];
	//let tempStr = ' ';
	for (let i = 0; i < inputArray.length; i++) {
		//tempStr = ' ' + inputArray[i] + tempStr;
		tempArray.unshift(inputArray[i]);
	}
	//return tempStr.trim().split(' ');
	return tempArray;
}

function reverseWord(word) {
	let reverseStr = '';
	for (let i = 0; i < word.length; i++) {
		reverseStr = word[i] + reverseStr;
	}
	return reverseStr;
}

console.log(reverseWord('Hello'));
console.log(reverseAnArray(myArray));
