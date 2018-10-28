
const randomized_partition = require('../ch_7/randomized_quicksort').randomized_partition
const utils = require('../Utils')

// expected : 0(n)
// worst case : 0(n^2)
const randomized_select = (A, p, r, i) => {
    if (p == r) {
        return A[p]
    }
    let q = randomized_partition(A, p, r)
    let k = q - p + 1
    if (i == k) {
        return A[q]
    } else if (i < k) {
        return randomized_select(A, p, q - 1, i)
    } else {
        return randomized_select(A, q + 1, r, i - k)
    }
}

let A = utils.randomArray(10)
// let A = [ 17, 24, 66, 40, 27, 22, 14, 83, 2, 15 ]
console.log(A)
console.log(randomized_select(A, 0, A.length - 1, 2))
