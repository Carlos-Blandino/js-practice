function deletingDuplicatesInArray(items) {
    let resultArray = []
    let currentNum = items[0]
    items.unshift()

    for( let i = 0; i < items.length; i++) {
        for( let j = 0 ; j < items.length; j++){
            if (currentNum === items[j]){
                if (resultArray.includes(items[i])){
                    items.unshift()
                } else {
                    resultArray.push(items[i])
                    currentNum = items[i]
                    items.unshift()
                }
            }
        }

    }
    return resultArray
}
console.log(deletingDuplicatesInArray([1,1,3,4,5,99,6,23,6,6,5,8,10]))
console.log(deletingDuplicatesInArray(['dog','cat','mouse','cat','elephant','dog']))