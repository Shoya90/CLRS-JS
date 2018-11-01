insertion_sort = (A) => {
    for(j=1; j < A.length; j++){
        key = A[j]
        // insert A[j] into the sorted sub sequence A[0,...,j-1]
        i = j - 1
        while(i >= 0 && A[i] > key){
            // copy each element to its right position
            A[i + 1] = A[i]
            i -= 1
        }
        A[i + 1] = key
    }
}

const A = Uint32Array.from(require('../Utils').randomArray(100000))
require('../Utils').AlgorithmInfoLog(insertion_sort, [A, 1, 100000], false)
// module.exports = insertion_sort

// 100k     time (micro secs)
// c++ .... 7933582 DEBUG
// c++ .... 1423482 RELEASE
// js  .... 6552189 un-typed array
// js  .... 6392074 Uint32Array

// 200k
// c++ .... 31863479 DEBUG
// c++ .... 5741924  RELEASE
// js  .... 26036010

// javascript beats c++ (debug)
// c++ (release) crushes javascript