const utils = require('../Utils')

const counting_sort = (A, k) => {
    let B = []
    let C = []
    
    for (let i = 0; i <= k; i++) {
        C.push(0)
    }

    for (let i = 0; i < A.length; i++) {
        C[A[i]] = C[A[i]] + 1
    }
    // now C[i] contains the number of elements equal to i

    for (let i = 1; i <= k; i++) {
        C[i] = C[i] + C[i - 1]
    }
    // now C[i] contains the number of elements less that or equal to i

    for (let i = A.length - 1; i >= 0; i--) {
        B[C[A[i]]] = A[i]
        C[A[i]] = C[A[i]] - 1
    }

    return B.slice(1)

}

// let A = utils.randomArray(20)
// let A = [2, 5, 3, 0, 2, 3, 0, 3, 11, 90, 4, 1]
// utils.AlgorithmInfoLog(counting_sort, [A, 90], true)
// console.log(counting_sort(A, 90))

module.exports = counting_sort