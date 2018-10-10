const Heap = require('./Heap')
const utils = require('../Utils')
const chalk = require('chalk')

const A = utils.randomArray(10)

class MaxPriorityQueue extends Heap {

    constructor(A) {
        super()
        this.build_max_heap(A)
    }

    heap_maximum() {
        if (!this.size()) {
            throw new Error('Heap Empty')
        }
        return this.heap[0]
    }

    // O(lgn)
    heap_extract_max() {
        let n = this.heap.length - 1
        if (n == 0) {
            throw new Error('Heap has only one element')
        }
        this.switchItems(0, n)
        let max = this.heap.pop()
        this.max_heapify(0)
        return max
    }

    // O(lgn)
    heap_increase_key(i, key) {
        // can't decrease
        if (this.heap[i] > key) {
            throw new Error('New key smaller than original')
        }
        this.heap[i] = key
        while (this.heap[i] > this.heap[this.parent(i)]) {
            this.switchItems(i, this.parent(i))
            i = this.parent(i)
        }
    }

    // Excercis 6-5.6 using the idea of isertion sort
    heap_increase_key2(i, key) {
        // can't decrease
        if (this.heap[i] > key) {
            throw new Error('New key smaller than original')
        }
        this.heap[i] = key
        while (i !== null && key > this.heap[this.parent(i)]) {
            this.heap[i] = this.heap[this.parent(i)]
            i = this.parent(i)
        }
        this.heap[i] = key
    }

    // O(lgn)
    max_heap_insert(key) {
        this.heap.push(-Infinity)
        this.heap_increase_key(this.size() - 1, key)
    }

    // Excercise 6-5.7 
    max_heap_delete(i){
        if(i >= this.size()){
            throw new Error('Index out of range')
        }
        this.switchItems(i,this.size() - 1)
        this.heap.pop()
        this.max_heapify(i)
    }
}


const h = new MaxPriorityQueue(A)
h.printHeap()
// try {
//     h.heap_increase_key2(7, 20)
// } catch (e) {
//     console.error(chalk.red(e))
// }
h.max_heap_delete(0)
// h.max_heap_insert(9)
h.printHeap()

