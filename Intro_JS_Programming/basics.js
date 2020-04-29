//primitive datatypes: string, number, undefined, boolean, null

//string - list of characters in a specific sequence

//string using single quotes
//in node the console is your screen and log is a method in the console object
//log is synonymous to print or display to the output, after printing to the
//screen the extra output of 'undefined' is indicating there was no return value
console.log('I said, "Hi! There"');
//string using double quotes
console.log("I said, 'Hi! There'");

//string interpolation is a feature of template literals and need to use back ticks
console.log(`10 plus 5 equals ${10 + 5}`);

//example of numbers, the default is double precision floating point
1, -1, 2.2, 2398.33884, 88574839;

//decleration and assignment thus num1 in an expression will return 3
let num1 = 3;
//this declaration has no assignment and js will automatically return undefined
let var1;
//we can explicitly assign null to represent no value initialized
//in debgging will recognize our intent with null vs an oversight when we see undefined returned
//by the expression
let str1 = null;
//you can use typeof to check for string, undefined, number, boolean, and null
console.log(typeof num1);
console.log(typeof var1);
console.log(typeof str1);

//js uses coercion and converts the decimal number to float
console.log(2 + 3.11);
console.log(5 / 3);
console.log(5 % 2);
//numbers are coerced to string
//associativity from left to right
console.log(2 + 3.5 + '22');
console.log('22' + 5.5 + 4.5);
console.log(5 + 'hello');

//explicit coercion
console.log(typeof Number('2.5'));
console.log(parseInt('2.2xy'));
console.log(parseInt('xy22'));
console.log(parseFloat('10.11'));

console.log(typeof String(22.5));

//arrays
console.log(
    [
        1,
        33,
        92,
        99,
        'hello', [33.2, 3.1, 'pi'],
        { name: 'Carlos', height: 57 }
    ][3]
);
//index 3 does not exsist so javascript returns undefined - no error thrown
//index out of bounds returns undefined
console.log([1, 2, 3][3]);

//object literals are key / value pairs within braces

let name = { firstName: 'Jerry', lastName: 'Lewis' };
//deconstruct the objects keys to new variables outside the object
let { firstName, lastName } = name;
//use the new variable with template literals
console.log(`My name is ${firstName} ${lastName}`);

//expressions don't have to use operators ( +,-,/,*,%) , any value is an expression
//that evaluates to itself

let str2 = 'hello world';

var a = 'a';

//read the strings from left to right '1' < '9' then '2' < '9' returns true
'12' < '9';