A = require('./Utils').randomArray(10000)

selection_sort = (A) => {
    for (j = 0; j < A.length - 1; j++) {
        min = j
        for (i = j + 1; i < A.length; i++) {
            if (A[i] < A[min]) {
                min = i
            }
        }
        tmp = A[min]
        A[min] = A[j]
        A[j] = tmp
    }
}
console.time('selection sort')
selection_sort(A)
console.timeEnd('selection sort')