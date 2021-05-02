function binarySearch(array, value){
    // add whatever parameters you deem necessary - good luck!
    let lowerBound = 0;
    let upperBound = array.length - 1;

    while(lowerBound <= upperBound){
        let middlePointer = Math.floor((lowerBound + upperBound )/ 2);
        if(value > array[middlePointer]){
            lowerBound = middlePointer + 1;
        }
        if(value < array[middlePointer]){
            upperBound = middlePointer - 1;
        }
        if(value === array[middlePointer]){
            return middlePointer
        }
    }
    return -1
  }
  console.log('search', binarySearch([1,2,3,4,5],5))
