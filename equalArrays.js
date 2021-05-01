/**
 * return true if two arrays are equal, false otherwise
 */
 function isEqual(a1, a2) {
    if(a1.length !== a2.length) return false;
    if(a1.length === 0 && a2.length === 0) return true;
    
    //temp var to hold mutated array , going to empty out both arrays and 
    //then compare 
    
    let a3 = a2.slice()
    
        a1.forEach((e)=> {
            if(!a2.includes(e)) {
                return false;
            } else {
                let index = a2.indexOf(e)
                a2.splice(index,1);
            }
    
        })
        a3.forEach((e)=> {
            if(!a1.includes(e)) {
                return false;
            } else {
                let index = a1.indexOf(e)
                a1.splice(index,1);
            }
    
        })
        //true when counts and repetions are equal
        if(a1.length === 0 && a2.length === 0) return true;
        //false when same lengths  and counts are different
        if(a2.length === a1.length) return false
     
    
    
        
    }