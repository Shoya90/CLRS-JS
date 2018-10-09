
merge = (A, p, q, r) => {
    // calculate the size of two sub-arrays
    n1 = q - p + 1
    n2 = r - q 
    L = []
    R = []
    
    // fill the left and right sub arrays
    for(i=0; i < n1; i++){
        L[i] = A[p + i - 1]
    }
    for(i=0; i < n2; i++){
        R[i] = A[q + i]
    }

    // insert the sentinels
    L.push(Infinity)
    R.push(Infinity)

    // compare the two sub arrays and insert the smallr value 
    // into the original array
    i = 0
    j = 0
    for(k=p-1; k < r ; k++){
        if(L[i] <= R[j]){
            A[k] = L[i]
            i++
        }
        else{
            A[k] = R[j]
            j++
        }
    }
}

merge_sort = (A, p, r) => {
    if(p < r){
        let q = Math.floor((p + r) / 2)
        merge_sort(A, p, q)
        merge_sort(A, q + 1, r)
        merge(A, p, q, r)
    }
}

require('../Utils').AlgorithmInfoLog(merge_sort, [require('./Utils').randomArray(100000), 1, 100000], false)
module.exports = merge_sort