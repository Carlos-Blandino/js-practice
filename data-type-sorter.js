// One to Multi

// Build a function that sorts an array into a multidimensional array grouped by data type

// Write a function that takes one parameter
// Parameter 1 - An array of anything
// The function should output a multidimensional array grouped by data type
// Example:
// var myArray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];
// groupArray(myArray);
// Output - [['hello, 'goodbye', '25'], [34, 56, 12], [true, false, true]]

var myArray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];

function dataTypeSorter(anyArray) {
    var numericArray = [];
    var strinArray = [];
    var boolArray = [];
    var multiArray = [];

    for (var i = 0; i < anyArray.length; i++) {
        var varType = typeof anyArray[i];
        switch (varType) {
            case 'string':
                strinArray.push(anyArray[i]);
                break;
            case 'number':
                numericArray.push(anyArray[i]);
                break;
            case 'boolean':
                boolArray.push(anyArray[i]);
                break;
            default:
                console.log('error');
        }
    }
    multiArray.push(strinArray, numericArray, boolArray);
    return multiArray;
}

console.log(dataTypeSorter(myArray));