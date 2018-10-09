merge_sort = require('./merge_sort')

hasSum = (A, S) => {
    merge_sort(A, 1, A.length)
    let i = 0
    let j = A.length - 1
    while(i < j){
        if(A[i] + A[j] == S){
            console.log('yes')
            return
        }
        else if(A[i] + A[j] < S){
            i++
        }
        else{
            j--
        }
    }
    console.log('no')
}

A = require('./Utils').randomArray(10)
hasSum(A, 8)
console.log(A)
