/**
 * for up to about 150K numbers quick sort is faster
 * but increasing the array size to 250K and 500K and more 
 * radix sort starts to crush quick sort, e.g. at 500K 
 * radix sort is about 60% faster which is insane
 */

const utils = require('../Utils')

// O(n)
const radix_sort = (A, d) => {
    let T = []
    
    for(let i=d - 1; i >= 0; i--){
        counting_sort_modified(A, 9, i)
    }
    // console.log(A)
}

const counting_sort_modified = (A, k, d) => {
    let B = []
    let C = []
    
    for (let i = 0; i <= k; i++) {
        C.push(0)
    }

    for (let i = 0; i < A.length; i++) {
        C[parseInt(A[i][d])] = C[parseInt(A[i][d])] + 1
    }

    for (let i = 1; i <= k; i++) {
        C[i] = C[i] + C[i - 1]
    }

    for (let i = A.length - 1; i >= 0; i--) {
        B[C[parseInt(A[i][d])]] = A[i]
        C[parseInt(A[i][d])] = C[parseInt(A[i][d])] - 1
    }

    for (let i = 1; i < B.length; i++) {
        A[i - 1] = B[i]
    }

}

let A = utils.randomArrayBetweenRangeString(100000, 1000000, 50000)
utils.AlgorithmInfoLog(radix_sort, [A, 6], false)
// console.log(A)
// radix_sort(A, 3)