/*
    Shorthand Object Properties
*/
const computeNumbers = (num1, num2) => {
	const addition = num1 + num2;
	const subtract = num1 - num2;
	const multiply = num1 * num2;
	return { addition, subtract, multiply };
};

console.log(computeNumbers(5, 3));
