// Create a function that should return the element present in
// the middle index. If the array contains an even
// number of elements, return the item in the first
// half of the array closest to the middle.

function midElement(items) {
    let midElement = 0;
    let element = 0;
    if (items.length % 2 === 0) {
        midElement = items.length / 2 - 1;
        element = items[midElement];
    } else {
        //let remainder = items.length % 2;
        midElement = Math.floor(items.length / 2);
        console.log(items[midElement]);
        element = items[midElement];
    }
    return element;
}
midElement([2, 5, 7, 10, 34]);

/**Build a function, find_middle, that finds the middle of a string. 
 * If the string is an odd number of characters, it returns 1 letter. 
 * If it is an even number of characters, it returns 2 characters. 
 * It takes a string as a parameter
 *  Example:
 *  find_middle_letters('seven')
 * Return: 'v'
 * find_middle_letters('dish')
 * Return: 'is'
 */

function findMiddle(inputString) {
    var startIndex = null;
    var result = null;

    if (inputString.length % 2 !== 0) {
        //if the remainder is not a zero then the number is odd
        //divide the array length will give a floating number that needs to be rounded
        startIndex = inputString.length / 2;
        result = inputString[Math.floor(startIndex)];
    } else {
        //need to compensate for the 0 index and subtract 1 for the slice start
        startIndex = inputString.length / 2;
        result = inputString[startIndex - 1] + inputString[startIndex];
    }
    return result;
}
console.log(findMiddle(['dog', 'cat', 'kitten']));
console.log(findMiddle('alphabet'));