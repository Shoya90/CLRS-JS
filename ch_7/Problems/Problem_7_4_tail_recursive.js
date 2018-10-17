/**
 * 
 */
const utils = require('../../Utils')
let A = util.randomArray(10)

const partition = (A, p, r) => {
    let x = A[r]
    let i = p - 1
    for (let j = p; j < r; j++) {
        if (A[j] >= x) {
            i += 1
            util.exchange(A, i, j)
        }
    }
    util.exchange(A, i + 1, r)
    return i + 1
}

const tail_recursive_quicksort = (A, p, r) => {
    if (p < r) {
        let q = partition(A, p, r)
        tail_recursive_quicksort(A, p, q - 1)
        p = q + 1
    }
}


utils.AlgorithmInfoLog(tail_recursive_quicksort, [A, 0, A.length - 1], true)