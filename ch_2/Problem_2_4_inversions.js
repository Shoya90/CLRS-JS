let inversions = 0
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
            // every time we take an item from the Right array
            // it means that it was initialy smaller than n1 - i items
            // from the Left array
            inversions += n1 - i
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

A = require('./Utils').randomArray(5)
// A = [5,4,3,2,1]
// console.time('Merge Sort')
console.log(A)
merge_sort(A, 1, A.length)
console.log(inversions)
// const used = process.memoryUsage().heapUsed / 1024 / 1024
// console.log(Math.round(used, 2) + 'MB')
// console.timeEnd('Merge Sort')
// module.exports = merge_sort