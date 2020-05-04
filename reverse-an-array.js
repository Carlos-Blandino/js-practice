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

var myArray = ['hello', 45, 'Bob', 'what', '23'];

function reverseArray(inputArray) {
    var tempArray = [];
    var arrayLen = inputArray.length - 1;
    for (arrayLen; arrayLen >= 0; arrayLen--) {
        tempArray.push(inputArray[arrayLen]);
    }
    return tempArray;
}
console.log(reverseArray(myArray));

function reverseAnArray(inputArray) {
    let tempArray = [];
    let tempStr = ' ';
    for (let i = 0; i < inputArray.length; i++) {
        tempStr = ' ' + inputArray[i] + tempStr;
    }
    return tempStr.trim().split(' ');
}

console.log(reverseAnArray(myArray));