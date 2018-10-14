const chalk = require('chalk')
const Utils = require('../Utils')

class DrayHeap {
    constructor(array, d) {
        // super()
        this.d = d
        this.heap = array
        this.build_max_heap()
    }

    parent(i) {
        return Math.floor(i / this.d)
    }

    child(k, i) {
        return this.d * i + k
    }

    size() {
        return this.heap.length - 1
    }

    // O(nlg(n)base(d))
    build_max_heap() {
        let i = Math.floor((this.size() + 1) / this.d)
        while (i >= 0) {
            this.max_heapify(i)
            i--
        }
    }

    // O(dlog(n)base(d))
    max_heapify(i) {
        let children = []
        let k = 1
        while (k <= this.d) {
            let child_index = this.child(k, i)
            if(child_index > this.size())
                return

            children.push(child_index)
            k++
        }
        let larget = this.heap[i]
        let _index = i
        k = 0
        while (k <= this.d) {
            if (this.heap[children[k]] > larget) {
                larget = this.heap[children[k]]
                _index = children[k]
            }
            k++
        }
        if (_index != i) {
            this.switchItems(i, _index)
            this.max_heapify(_index)
        }
    }

    // O(dlog(n)base(d))
    extract_max(){
        if(this.size() == 0){
            throw new Error('heap has only one element!')
            return
        }
        this.switchItems(0, this.size())
        const max = this.heap.pop()
        this.max_heapify(0)
        return max
    }
    
    // O(lg(n)base(d))
    increase_key(i, key) {
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

    // O(lg(n)base(d))
    insert_key(key) {
        this.heap.push(-Infinity)
        this.increase_key(this.size(), key)
    }

    switchItems(i, n) {
        let tmp = this.heap[i]
        this.heap[i] = this.heap[n]
        this.heap[n] = tmp
    }

    printHeap() {
        console.log(chalk.green(this.heap))
    }
}

let A = Utils.randomArray(10)
const d_ary_MH = new DrayHeap(A, 3)
d_ary_MH.printHeap()
// console.log(d_ary_MH.extract_max())
d_ary_MH.insert_key(124)
d_ary_MH.printHeap()