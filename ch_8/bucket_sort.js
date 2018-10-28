/**
 * This is the non-linked-list version
 * I'm just using arrays as buckets,
 * Actually this is very slow now, because of the 
 * Array.prototype.concat function, 
 * I'll be implementing the linked-list version
 * in future chapters
 */
const Utils = require('../Utils')
const insertion_sort = require('../ch_2/insertion_sort')

bucket_sort = (A) => {
    let B = []
    let C = []
    let n = A.length
    for (i in A) {
        B.push(new Array())
    }

    for (let i = 0; i < n; i++) {
        B[Math.floor(n * A[i])].push(A[i])
    }

    for (let i = 0; i < n; i++) {
        insertion_sort(B[i])
    }
    
    for (let i = 0; i < n; i++) {
        C = C.concat(B[i])
    }

    return C
}

let A = Utils.randomArrayBetween0And1(10000)
Utils.AlgorithmInfoLog(bucket_sort, [A], false)