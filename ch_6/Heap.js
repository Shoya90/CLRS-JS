const chalk = require('chalk')
const Utils = require('../Utils')

class Heap {

    constructor() {
        this.heap
        this.sorted = []
        this.min = false
        this.max = false
    }

    left(i) {
        return (i + 1) * 2 - 1
    }

    right(i) {
        return (i + 1) * 2
    }

    parent(i) {
        return Math.floor(i / 2)
    }

    size() {
        return this.heap.length
    }

    height(i) {
        let h = 0
        let j = i
        while (this.heap[this.left(j)]) {
            j = this.left(j)
            h++

        }
        return h
    }

    build_max_heap(A){
        this.heap = A
        // run max_heapify for all non-leaf nodes
        for(let i=Math.floor(A.length /2); i >= 0; i--){
            this.max_heapify(i)
        }
        this.max = true
    }

    build_min_heap(A){
        this.heap = A
        // run max_heapify for all non-leaf nodes
        for(let i=Math.floor(A.length /2); i >= 0; i--){
            this.min_heapify(i)
        }
        this.min = true
    }

    max_heapify(i) {
        let L = this.left(i)
        let R = this.right(i)
        let largest
        if (L <= this.size() && this.heap[L] > this.heap[i]) {
            largest = L
        }
        else {
            largest = i
        }
        if (R <= this.size() && this.heap[R] > this.heap[largest]) {
            largest = R
        }
        if (largest !== i) {
            let tmp = this.heap[i]
            this.heap[i] = this.heap[largest]
            this.heap[largest] = tmp
            this.max_heapify(largest)
        }
    }

    // 6.2-6
    max_heapify_non_recursive(i) {
        let L = this.left(i)
        let R = this.right(i)
        let j = i
        let largest
        while (this.heap[L] >= this.heap[j] || this.heap[R] >= this.heap[j]) {
            if (L <= this.size() && this.heap[L] >= this.heap[j]) {
                largest = L
            }
            else {
                largest = j
            }
            if (R <= this.size() && this.heap[R] >= this.heap[largest]) {
                largest = R
            }
            if (largest !== j) {
                let tmp = this.heap[j]
                this.heap[j] = this.heap[largest]
                this.heap[largest] = tmp

                // update values for the next iteration
                j = largest
                L = this.left(j)
                R = this.right(j)
            }
        }
    }

    // 6.2-5
    min_heapify(i) {
        let L = this.left(i)
        let R = this.right(i)
        let smallest
        if (L <= this.size() && this.heap[L] <= this.heap[i]) {
            smallest = L
        }
        else {
            smallest = i
        }
        if (R <= this.size() && this.heap[R] <= this.heap[smallest]) {
            smallest = R
        }
        if (smallest !== i) {
            let tmp = this.heap[i]
            this.heap[i] = this.heap[smallest]
            this.heap[smallest] = tmp
            this.min_heapify(smallest)
        }
    }

    _switchFirstAndLast(){
        let tmp = this.heap[0]
        this.heap[0] = this.heap[this.size() - 1]
        this.heap[this.size() - 1] = tmp
    }

    heap_sort(A){
        // first populate the output array
        for(let i=0; i < A.length; i++){
            this.sorted.push(A[i])
        }
        let n = A.length - 1
        this.build_max_heap(A)
        while(n >= 0){
            this._switchFirstAndLast()
            this.sorted[n] = this.heap.pop()
            this.max_heapify(0)
            n--
        }

    }

    printHeap() {
        console.log(chalk.green(this.min ? `min heap : ${this.heap}` : `max heap : ${this.heap}`))
    }

    printHeapSort(){
        console.log(chalk.green(this.sorted))
    }
}

let h = new Heap()
let A = Utils.randomArray(1000000)
// h.build_max_heap([5,3,17,10,84,19,6,22,9])
// h.print()
console.time('HEAP SORT : ')
h.heap_sort(A)
console.timeEnd('HEAP SORT : ')
// h.printHeapSort()
