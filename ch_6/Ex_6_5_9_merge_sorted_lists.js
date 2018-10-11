/** Give an O(nlgk)-time algorithm to merge k sorted lists into one sorted list, 
 * where n is the total number of elements in all the input lists. 
 * (Hint: Use a min- heap for k-way merging.)
 */

const MinPriorityQueue = require('./Ex_6_5_3_Min_priority_queue')
const utils = require('../Utils')

const A = [8, 14, 51, 65, 74, 78, 84, 90, 95, 96, 145, 170, 201]
const B = [10, 12, 25, 53, 63, 67, 68, 78, 84, 93, 101, 123, 194, 201]
const C = [0, 35, 35, 44, 47, 50, 55, 71, 77, 89, 133, 145, 166]

const K_way_merge = (A, B, C) => {

    const MPQ = new MinPriorityQueue([A[0], B[0], C[0]])

    let n = A.length + B.length + C.length
    let i = j = k = 0
    let sorted_array = []

    while (i + j + k < n) {
        let min
        try {
            min = MPQ.heap_extract_min()
        } catch (e) {
            sorted_array.push(MPQ.heap[0])
            break
        }

        sorted_array.push(min)

        if (A.length - 1 == i && B.length - 1 == j && k != C.length - 1) {
            if (C[k + 1]) {
                k++
                MPQ.min_heap_insert(C[k])
            }
        }
        else if (A.length - 1 == i && C.length - 1 == k && j != B.length - 1) {
            if (B[j + 1]) {
                j++
                MPQ.min_heap_insert(B[j])
            }
        }
        else if (C.length - 1 == k && B.length - 1 == j && i != A.length - 1) {
            if (A[i + 1]) {
                i++
                MPQ.min_heap_insert(A[i])
            }
        } else {
            if (min == A[i]) {
                if (A[i + 1]) {
                    i++
                    MPQ.min_heap_insert(A[i])
                }
            }
            if (min == B[j]) {
                if (B[j + 1]) {
                    j++
                    MPQ.min_heap_insert(B[j])
                }
            }
            if (min == C[k]) {
                if (C[k + 1]) {
                    k++
                    MPQ.min_heap_insert(C[k])
                }
            }
        }


    }

    console.log(sorted_array, sorted_array.length)

}

K_way_merge(A, B, C)