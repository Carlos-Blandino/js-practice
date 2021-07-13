
let date2 = new Date(); 
function printName(){
    name = 'Astrov'
    name2 = 'Dug'
    changeName();
    console.log("current character is ", name);
}

function changeName(){
    name = 'Codey';
    console.log("dug", name2)
}

var animal = {
    type: 'dog',
    sound: function (){

    },
  
}
var animal = new Object();
animal.type = 'cat',
animal.sound = () => { console.log('woof \
is not to much')}
// How many unique characters are in the word 'Data Structures'?
const word = "Data Structures";

// Create a Set - lowercase the word
const set = new Set(word.toLowerCase());

// Size of the Set is the number of unique characters
console.log( set, set.size);
console.log('numbe.isnan', Number.isNaN(NaN));
console.log('global isnan', isNaN('sale'));

let num  = 3;

if(isNaN(num)){
    console.log('not a number')
} 
function hexColour(c) {if (c < 256) {
    return Math.abs(c).toString(2); }return0;
};

    console.log(hexColour(245))

function stringToNum(str) {
    
    if (Number.isNaN(str)) { 
    // Check if string has a number.
    throw 'String that cannot be converted.' 
}
if (Number.isInteger(str)) return Number.parseInt(str); // Return integer

return Number.parseFloat(str); // return float
};
console.log('Number.isNaN() ', Number.isNaN('salesforce'));
console.log('Global isNaN() ', isNaN('salesforce'));
console.log(stringToNum("hello"));// In this example, the returned number is limited to two decimal places.
console.log(stringToNum('5.8493afjlkasdf').toFixed(2));// In this example, the primitive value of the number is displayed.
console.log(stringToNum('5.8493afjlkasdf').valueOf())

const now = new Date();
console.log('day #', now)
console.log('day #', Date.now())
console.log('day #', now.getDate())
console.log('day #', now.getDay())

function timeLapsed() {
    let date = new Date(); 
    date.setHours(6); 
    date.setMinutes(0); 
    date.setSeconds(0);
   

    return new Date() - date;
};
console.log('function time', Date.now() - date2)
console.log(new Date(), timeLapsed())
let time = timeLapsed()
console.log('t',new Date(time))

function elapsedTime(sDate) {
    const minDivisor = 1000 * 60;
    const secDivisor = 1000;
    let eMSecs = Date.parse(new Date()) - Date.parse(sDate);
    let minutes = Math.floor(eMSecs/minDivisor);
    let secondsLeft = eMSecs - (minutes * minDivisor);
    return `The question took ${minutes} minute(s) and ${Number(secondsLeft/secDivisor).toFixed(0)} second(s).`;
    };

console.log(!'1')
console.log(!!'1')
console.log(!!!'1')

function displayProduct(product) {
    if (product.stock  && product.price) {
        let discountValue = 0;
        if (product.discount) {
                 discountValue = product.price * (product.discount / 100);   
                }
                product.salesPrice = product.price - discountValue;
                return product; 
            }
                return null;
            }
let product1 = { price: 23,   discount: null, stock: 0 };
let product2 = { price: 75,   discount: 10,   stock: '0' };
let product3 = { price: '35', discount: '5',  stock: 'false' };
console.log('Product 1: ', displayProduct(product1));
console.log('Product 2: ', displayProduct(product2));
console.log('Product 3: ', displayProduct(product3));

