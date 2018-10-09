max_subarray_brute_force = (A) => {
    let sum = -Infinity
    let start, end = 0
    for (let i = 0; i < A.length - 1; i++) {
        let t = A[i]
        for (let j = i + 1; j < A.length; j++) {
            t += A[j]
            if (t > sum) {
                sum = t
                start = i
                end = j
            }
        }
    }
    console.log(start, end, sum)
}

Util = require('../Utils')
// A = Util.randomArrayWithNegatives(100000)
A = [ 9, 5, 2, -5, -6, -4, -10, -3, 6, -1 ]
Util.AlgorithmInfoLog(max_subarray_brute_force, [A], false)

// max_subarray_brute_force(A)