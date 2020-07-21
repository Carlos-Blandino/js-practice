/*
    Shorthand Object Properties
*/
const computeNumbers = (num1, num2) => {
	const addition = num1 + num2;
	const subtract = num1 - num2;
	const multiply = num1 * num2;
	return { addition, subtract, multiply };
};
const nums = computeNumbers(5, 3);
console.log('computed: ', nums.addition);

/*
    Computed Properties
*/

const mouse = 'Mickey';
const duck = 'Donald';
const elephant = 'Dumbo';
const mainActor = 'hero';
const supportingActor = 'side kick';
const supportingActor2 = 'villain';

const cast = {
	[mainActor]: mouse,
	[supportingActor]: duck,
	[supportingActor2]: elephant
};

console.log(`the villain is ${cast.villain}`);

/*
    Adding Methods to Objects
*/

const speak = {
	angryTo: function(name) {
		console.log(`${name} stop acting like a jerk`);
	}
};

speak.angryTo('Mark');

/* 
    Using a shorthand when adding methods to objects
*/

const greet = {
	birthdayTo(name) {
		console.log(`Happybirthday ${name}`);
	},
	chirstmasTo(name) {
		console.log(`Merry Christmas ${name}`);
	}
};

greet.birthdayTo('John');
