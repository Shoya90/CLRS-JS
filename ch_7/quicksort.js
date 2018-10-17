const utils = require('../Utils')
let A = util.randomArray(15)

// worst case 0(n^2)
// average 0(nlog(n))
const partition = (A, p, r) => {
    let x = A[r]
    let i = p - 1
    for (let j = p; j < r; j++) {
        // Ex_7_1.2
        // if(A[j] <= x && j % 2 == (p + 1) % 2)
        if (A[j] >= x) {
            i += 1
            util.exchange(A, i, j)
        }
    }
    util.exchange(A, i + 1, r)
    return i + 1
}

const quicksort = (A, p, r) => {
    if (p < r) {
        let q = partition(A, p, r)
        quicksort(A, p, q - 1)
        quicksort(A, q + 1, r)
    }
}


utils.AlgorithmInfoLog(quicksort, [A, 0, A.length - 1], true)