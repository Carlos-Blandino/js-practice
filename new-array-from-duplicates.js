function newArrayFromDuplicates(items) {

    let newArray = []

    const resultArray = items.reduce(( accumulator, currentItem) => {
            if (accumulator[currentItem]) {
                accumulator[currentItem]++
            } else {
                accumulator[currentItem] = 1
            }
            return accumulator
        }, {});
    for( let item in resultArray){
        if ( resultArray[item]  > 1) {
            newArray.push(item)
        }
    }
    return newArray
}

console.log("nums: ", newArrayFromDuplicates([1,1,3,4,5,99,6,23,6,6,5,8,10]))
console.log("string: ", newArrayFromDuplicates(['dog','cat','mouse','cat','elephant','dog']))