const utils = require('../Utils')
const A = util.randomArray(10)

// worst case 0(n^2)
// average 0(nlog(n))
const partition = (A, p, r) => {
    let x = A[r]
    let i = p - 1
    for (let j = p; j < r ; j++) {
        // Ex_7_1.2
        // if(A[j] <= x && j % 2 == (p + 1) % 2)
        if (A[j] <= x) {
            i += 1
            util.exchange(A, i, j)
        }
    }
    util.exchange(A, i + 1, r)
    return i + 1
}

const randomized_partition = (A, p, r) => {
    let i = Math.floor(Math.random() * (r - p)) + p
    util.exchange(A, i, r)
    return partition(A, p, r)
}

const randomized_quicksort = (A, p, r) => {
    if (p < r) {
        let q = randomized_partition(A, p, r)
        randomized_quicksort(A, p, q - 1)
        randomized_quicksort(A, q + 1, r)
    }
}


// quicksort(0, A.length - 1)
utils.AlgorithmInfoLog(randomized_quicksort, [A, 0, A.length - 1], true)