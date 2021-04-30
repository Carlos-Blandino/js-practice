/**
 * Implement a brute force algorithm for finding the missing number in an array
 */
 function missingNumberBruteForce(numbers) {
    for(let i = 1 ; i <= numbers.length + 1; i++){
      if(!numbers.includes(i)){
        return i
      }
    }
  }
  
  /**
   * Use an iterative  strategy for finding the missing number in an array
   */
  function missingNumberSum(numbers) {
    let startNum = numbers.reduce((a,b)=>  a + b);
    let endingNum = 0;
    
       for(let i = 0 ; i <= numbers.length + 1; i++){
      endingNum = endingNum + i;
    }
    
    return endingNum - startNum;
  }
  