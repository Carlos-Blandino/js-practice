/**
 * Implement an algorithm that sorts the array then returns the smallest and largest
 */
 function largestAndSmallestSort(numbers) {
    if(numbers.length === 0) return []
    numbers.sort((a,b) => a > b ? 1 : -1)
    if(numbers[0] < 0 && numbers[numbers.length - 1] < 0){
        return [numbers[0],numbers[numbers.length - 1]];
    }
  }
 console.log('numbers', largestAndSmallestSort([-2,-4,-1,-9,-6]))

  /**
   * Implement an algorithm that uses iteration to find the smallest and largest
   */
  function largestAndSmallestIterate(numbers) {
      if(numbers.length === 0) return []
    let small = numbers[0];
    let large = numbers[1];
    for( let i = 1 ; i < numbers.length ; i++){
      if(numbers[i] < small){
        small = numbers[i];
      }
      if(numbers[i] > large){
        large = numbers[i]
      }
    }
        return [small, large];
    
  }
  