function twoNumberSum(array, targetSum){
    array.sort((a,b) => a > b ? 1 : -1);
    let left =  0;
    let right = array.length - 1;

    while( left < right){
        const result = array[left] + array[right];
        if(result === targetSum){
            return [array[left], array[right]];
        } else if(result < targetSum){
            left++
        } else if(result > targetSum){
            right--
        }
    }
    return [];
}