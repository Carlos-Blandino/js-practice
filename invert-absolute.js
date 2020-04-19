/**
 * Build a function, invert_negatives, that takes a number as a parameter, 
 * and if the number is positive, it makes it negative. If it isn't a number, it returns false
 * - invert_negatives(-5)
 * - Returns: -5
 * - invert_negatives(4000)
 * - Returns: -4000
 * - invert_negatives('puppies')
 * - Returns: false
 */

function invert_negatives(inputNumber) {
    console.log(typeof inputNumber);
    if (typeof inputNumber === 'string') {
        return false;
    }
    if (inputNumber > 0) {
        inputNumber = inputNumber * -1;
        return inputNumber;
    } else if (inputNumber <= 0) {
        return inputNumber;
    }
}
console.log(invert_negatives(-200));
console.log(invert_negatives(400));
console.log(invert_negatives('puppies'));