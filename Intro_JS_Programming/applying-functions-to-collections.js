const nums = [ 30, 32, 34, 36, 38, 40, 42, 44, 46, 51 ];
let totalSum = 0;

// don't forget you have the optional index argument available
// accepts a callback function
// using an anonymous function
nums.forEach(function(num) {
	totalSum += num;
});

console.log(`The total sum is ${totalSum}`);

// no callback used here
for (let num of nums) {
	totalSum += num;
	console.log(totalSum);
}
