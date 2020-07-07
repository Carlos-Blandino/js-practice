// applying default parameters

function divide(numerator, denominator = 2) {
	return numerator / denominator;
}

console.log(`Divide 32 by the default of 2 = ${divide(32)}`);
console.log(`Divide 12 by 3 = ${divide(12, 3)}`);

// without default parameters
// typeof dose not actually return the value undefined but a string version
function divide2(numerator, denominator) {
	if (typeof denominator === 'undefined') {
		return numerator / 2;
	} else {
		return numerator / denominator;
	}
}

console.log(`Divide 32 by the default of 2 = ${divide2(32)}`);
console.log(`Divide 12 by 3 = ${divide2(12, 3)}`);

// applying spread to expand iterables in function calls, array literals, and object literals

// spread for a function call
function sumItUp(args) {
	let result = 0;
	for (let i = 0; i < arguments.length; i++) {
		result += arguments[i];
	}
	return result;
}
let myArray = [ 2, 3, 4, 5, 5 ];
console.log(`The sum of [2,3,4,5] is ${sumItUp(...myArray)}`);

// spread in array literals

let array1 = [ 10, 20, 30 ];
let array2 = [ 40, 50, 60 ];

let arrayJoin = [ ...array1, ...array2 ];
console.log(`Combining array1 and array2 results in: ${arrayJoin}`);

// spread in object literals

const shape = {
	lineWidth: 2,
	lineColor: 'red',
	shapeType: 'organic'
};

const square = {
	sides: 4,
	sideLengths: 'equal',
	shapeType: 'polygonal'
};

const squareShape = {
	...shape,
	...square
};

console.log(squareShape);

// applying rest parameters and spread in function call

function sumItUp2(num1, num2, ...nums) {
	let result = 0;

	for (num of nums) {
		result = result + num;
	}
	return result + num1 + num2;
}
let myArray2 = [ 2, 3, 4, 5, 5 ];
console.log(
	`The sum of num1, num2 and nums is ${sumItUp2(10, 20, ...myArray2)}`
);

// applying destructuring to arrays, objects, and parameters

// destructuring arrays
const myColors = [ 'red', 'blue', 'white', 'green' ];

const [ colorOfBlood, , colorOfInnocense ] = myColors;

console.log(
	`The color of blood is ${colorOfBlood} and the color of purity is ${colorOfInnocense}`
);

// destructuring objects
const employeeOfTheYear = {
	first: 'Carlos',
	last: 'Blandino',
	ssn: '0599',
	dob: '02/10/1969',
	salary: 55000
};

const {
	first: firstName,
	last: lastName,
	salary,
	...others
} = employeeOfTheYear;

console.log(
	`${firstName} ${lastName}'s salary of ${salary} is due for pay raise`
);

console.log(`The others are dob: ${others.dob} and ssn: ${others.ssn}`);

// destructuring a nested object

const myCars = [
	{ make: 'Ford', model: 'Mustang' },
	{ make: 'Ford', model: 'F-150' },
	{ make: 'Honda', model: 'Civic' }
];

const [ { model: theFastetCar }, , { model: theBestTruck } ] = myCars;

console.log(
	`${theFastetCar} is the best all around muscle car, while the ${theBestTruck} is the number one car in America`
);
