function arrayDuplicates(nums) {
    let resultArray = []
    let currentNum = nums[0]
    nums.unshift()

    for( let i = 0; i < nums.length; i++) {
        if ( currentNum === nums[i]){
            if (currentNum.includes(nums[i])){
                continue;
            } else {
                resultArray.push(nums[i])
                nums.unshift()
            }
        }
    }
}

