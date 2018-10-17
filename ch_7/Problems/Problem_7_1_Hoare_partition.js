const utils = require('../../Utils')


const hoare_partition = (A, p, r) => {
    let x = A[p]
    let i = p - 1
    let j = r + 1
    while (1) {
        while (1) {
            j--
            if (A[j] <= x) {
                break
            }
        }
        while (1) {
            i++
            if (A[i] >= x) {
                break
            }
        }

        if (i < j) {
            utils.exchange(A, i, j)
        } else {
            return j
        }
    }
}

const quicksort = (A, p, r) => {
    if (p < r) {
        let q = hoare_partition(A, p, r)
        quicksort(A, p, q)
        quicksort(A, q + 1, r)
    }
}


A = utils.randomArray(15)
utils.AlgorithmInfoLog(quicksort, [A, 0, A.length - 1], true)