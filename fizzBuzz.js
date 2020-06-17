// FizzBuzz

// Build a function that prints the numbers from 1 to 100.
// But for multiples of 3 print “Fizz” instead of the number
// and for the multiples of 5 print “Buzz”.
// For numbers which are multiples of both 3 and 5 print “FizzBuzz”.

// Write a function that takes no parameters
// The function should output the numbers 1 through 100, following the rules from above

function fizzBuzz() {
	for (let i = 1; i <= 100; i++) {
		if (i % 3 === 0) {
			if (i % 5 === 0) {
				console.log('FizzBuzz');
			} else {
				console.log('Fizz');
			}
		} else if (i % 5 === 0) {
			console.log('Buzz');
		} else {
			console.log(i);
		}
	}
}
fizzBuzz();
