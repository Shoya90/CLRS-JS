const Heap = require('./Heap')
const utils = require('../Utils')
const chalk = require('chalk')

class Heapsort extends Heap{
    
    constructor(A){
        super()
        this.sorted = []
        this.build_max_heap(A)
    }
    
    // O(n)
    heap_sort(A){
        // first populate the output array
        let n = this.heap.length - 1
        for(let i=0; i <= n; i++){
            this.sorted.push(A[i])
        }
        while(n >= 0){
            this.switchItems(0, n)
            this.sorted[n] = this.heap.pop()
            this.max_heapify(0)
            n--
        }

    }

    printHeapSort(){
        console.log(chalk.green(this.sorted))
    }

}

const A = utils.randomArray(10)
const hs = new Heapsort(A)
hs.heap_sort(A)
hs.printHeapSort()