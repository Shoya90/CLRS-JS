insertion_sort = (A) => {
    for(j=1; j < A.length; j++){
        key = A[j]
        // insert A[j] into the sorted sub sequence A[0,...,j-1]
        i = j - 1
        while(i >= 0 && A[i] < key){
            // copy each element to its right position
            A[i + 1] = A[i]
            i -= 1
        }
        A[i + 1] = key
    }
}

require('../Utils').AlgorithmInfoLog(insertion_sort, [require('./Utils').randomArray(100000), 1, 100000], false)


