insertion_sort_recursive = (A, n) => {
    if (n >= 1) {
        let q = A[n]
        insertion_sort_recursive(A, n - 1)
        let i = n - 1
        while (i >= 0 && A[i] >= q) {
            A[i + 1] = A[i]
            i--
        }
        A[i + 1] = q
    }
}

A = require('./Utils').randomArray(10)
console.log(A)
insertion_sort_recursive(A, A.length - 1)
console.log(A)
