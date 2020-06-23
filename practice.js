let colors = [ 'red', 'blue', 'yellow', 'white', 'violet', 'indigo', 'orange' ];
console.log(colors);
let nums = [ 3, 100, 0, 5, 2, 8, 55 ];
console.log(nums);

const fitBitData = {
	totalSteps: 30800,
	totalMiles: 3.4,
	'my mile': 300,
	name: 'John',
	45: 'forty five'
};

console.log(fitBitData[45]);
console.log(fitBitData['my mile']);

// for (let i = 0; i < 10; i++) {
// 	console.log(i + ' num');
// }

for (let i = 1; i <= 12; i++) {
	for (let j = 1; j <= 12; j++) {
		console.log(i * j);
	}
}
for (let num of nums) {
	console.log(`The array contains ${num}`);
}
let arr = '';
for (let char of 'My body') {
	console.log((arr = char + arr));
}
