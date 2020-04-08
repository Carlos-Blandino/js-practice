console.log(3 + 5);
let fruits = ['apple', 'banana', 'orang', 'cherries'];

for (let fruit of fruits) {
    console.log(fruit);
}
lookInToFruits = (fruits) => {
    fruits.filter((fruit) => {
        if (fruit == 'orang') {
            return false;
        } else {
            return true;
        }
    });
};
fruits.forEach((fruit) => {
    console.log('The other fruit ', fruit);
});

fruits.map((fruit) => {
    console.log(`The template fruits are ${fruit}`);
});

addNum = (num1 = 33, num2 = 10) => {
    return num1 + num2;
};

console.log(addNum(33, 20));

console.log(lookInToFruits(fruits));