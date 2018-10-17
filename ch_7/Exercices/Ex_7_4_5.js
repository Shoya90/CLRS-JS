/**
 * I did not see any improvement with various values of A and k
 * quicksort and randomized-quicksort are blazing fast and I couldn't find any
 * k for which the running time improves
 */
const utils = require('../../Utils')
const A = util.randomArray(10000)
const insertion_sort = require('../../ch_2/insertion_sort')

const partition = (A, p, r) => {
    if(r - p < 0){
        return 
    }
    let x = A[r]
    let i = p - 1
    for (let j = p; j < r ; j++) {
        if (A[j] <= x) {
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


quicksort(A, 0, A.length - 1)
utils.AlgorithmInfoLog(insertion_sort, [A], false)
