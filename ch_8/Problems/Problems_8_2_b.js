const utils = require('../../Utils')

// 0(n)
const sort = (A) => {
    let i = -1
    let j = A.length
    while (i < j) {
        while (A[i] != 1 && i < j) {
            i++
        }
        while (A[j] != 0 && j > i) {
            j--
        }
        utils.exchange(A, i, j)
        i++
        j--
    }
}


let A = [0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1]
sort(A)
console.log(A)
