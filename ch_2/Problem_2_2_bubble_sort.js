const Utils = require('../Utils')
bubble_sort = (A) => {
    for(let i =0; i < A.length - 1; i++){
        for(let j=A.length - 1; j >= i + 1; j--){
            if(A[j] < A[j - 1]){
                let tmp = A[j]
                A[j] = A[j - 1]
                A[j - 1] = tmp
            }
        }
    }
}
// (algorithm, array of arguments, print array, print time, print memory urage)
Utils.AlgorithmInfoLog(bubble_sort, [Utils.randomArray(100000)], false)

