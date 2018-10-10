const chalk = require('chalk')
const Utils = require('../Utils')

class Heap {

    constructor() {
        this.heap
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
        if(i == 0){
            return null
        }
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

    // O(lgn)
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

    switchItems(i, n){
        let tmp = this.heap[i]
        this.heap[i] = this.heap[n]
        this.heap[n] = tmp
    }

    printHeap() {
        console.log(chalk.green(this.min ? `min heap : ${this.heap}` : `max heap : ${this.heap}`))
    }

}

module.exports = Heap
