function deletingDuplicatesInArray(items) {
    let resultArray = []

    for( let i = 0; i < items.length; i++) {
        for( let j = 0 ; j < items.length; j++){

                if (resultArray.includes(items[i])){
                    break;
                } else {
                    resultArray.push(items[i])
                }

        }

    }
    return resultArray
}
console.log(deletingDuplicatesInArray([1,1,3,4,5,99,6,23,6,6,5,8,10]))
console.log(deletingDuplicatesInArray(['dog','cat','mouse','cat','elephant','dog']))