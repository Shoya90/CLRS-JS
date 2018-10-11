const Heap = require('./Heap')
const utils = require('../Utils')
const chalk = require('chalk')

const A = utils.randomArray(10)

class MinPriorityQueue extends Heap {

    constructor(A) {
        super()
        this.build_min_heap(A)
    }

    heap_minimum() {
        if (!this.size()) {
            throw new Error('Heap Empty')
        }
        return this.heap[0]
    }

    // O(lgn)
    heap_extract_min() {
        let n = this.heap.length - 1
        if (n == 0) {
            throw new Error('Heap has only one element')
        }
        this.switchItems(0, n)
        let min = this.heap.pop()
        this.min_heapify(0)
        return min
    }

    // O(lgn)
    heap_decrease_key(i, key) {
        // can't decrease
        if (this.heap[i] < key) {
            throw new Error('New key larger than original')
        }
        this.heap[i] = key
        while (this.heap[i] < this.heap[this.parent(i)]) {
            this.switchItems(i, this.parent(i))
            i = this.parent(i)
        }
    }

    // O(lgn)
    min_heap_insert(key) {
        this.heap.push(Infinity)
        this.heap_decrease_key(this.size() - 1, key)
    }
}


module.exports = MinPriorityQueue
// const h = new MinPriorityQueue(A)
// h.printHeap()
// try {
//     h.heap_decrease_key(3, -3)
// } catch (e) {
//     console.error(chalk.red(e))
// }
// // h.min_heap_insert(9)
// h.printHeap()

