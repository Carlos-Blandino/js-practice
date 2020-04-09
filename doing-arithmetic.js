/* #1
Build a function, do_math, that takes in 3 parameters: num1 (number), num2 (number), and operator (string)

it uses the operator to determine what math to do to the numbers
if '+', it adds them
if '-', it subtracts them
if '*' or 'x' or 'X', it multiplies them
if '/', it divides them
if then returns the result
Example:
do_math(5,2,'*')
Return: 10

*/

function doMath(number1, number2, operator) {
    var result = null;
    switch (operator) {
        case '*':
        case 'x':
        case 'X':
            result = number1 * number2;
            return result;
        case '+':
            result = number1 + number2;
            return result;
        case '-':
            result = number1 - number2;
            return result;
        case '/':
            result = number1 / number2;
            return result;
        default:
            console.log('Input error, please try again');
    }
}
console.log(doMath(2, 5, '*'));