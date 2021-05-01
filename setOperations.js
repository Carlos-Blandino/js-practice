/**
 * return the union of two sets
 */
 function union(s1, s2) {
  
    if(s2.size === 0){
        return (s1)
    }
    if(s1.size === 0 || s2.size === 0){
        return new Set()
    }
    let arr = [...s1,...s2]
 let comboSet = new Set(arr)
    return comboSet
}

/**
 * return the intersection of two sets
 */
function intersect(s1, s2) {
    if(s1.size === 0 || s2.size === 0){
        return new Set()
    } 

    let has = new Set()
    s1.forEach((e)=> {
        if(s2.has(e)) has.add(e)

    })
    if(has.size > 0) {
        return has
    } else {
        return new Set()
    }


}

/**
 * return the difference of two sets
 */
function difference(s1, s2) {
    if(s2.size === 0){
        return (s1)
    }
    if(s1.size === 0 || s2.size === 0){
        return new Set()
    }

let hasNot = new Set()
    let has = new Set()
    s1.forEach((e)=> {
        if(s2.has(e)) {
            has.add(e)
        } else {
            hasNot.add(e)
        }
    })
    if(has.size === 0) {
        return s1
    } 

    if(hasNot.size > 0) {
        return hasNot
    }
 
}