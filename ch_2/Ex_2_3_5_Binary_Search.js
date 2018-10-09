binary_search = (A, p, r, v) => {
    let m = Math.floor((r + p) / 2)
    if(A[m] == v){
        console.log(`found item at index ${m}`)
        return
    }
    else if(p == r && A[m] != v){
        console.log(`item not found :(`)
        return
    }
    else if(A[m] < v){
        binary_search(A, m + 1, r, v)
    }
    else if(A[m] > v){
        binary_search(A, p, m, v)
    }
    else{
        console.log(`item not found :(`)
        return
    }
}


// A = [ 1, 2, 4, 6, 7, 8, 9, 10, 11, 14 ]
// binary_search(A, 0, 10, 2)


let Util = require('../Utils')
let A = Util.randomArray(1000000)
Util.AlgorithmInfoLog(binary_search, [A, 0, A.length, 5], false)

module.exports = binary_search