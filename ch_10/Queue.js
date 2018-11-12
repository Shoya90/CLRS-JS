
class Queue {
    constructor(size) {
        this.queue = new Int32Array(size)
        this.size = size
        this.head = 0
        this.tail = 0
    }

    isEmpty(){
        if(this.head == this.tail){
            return true
        }
        return false
    }

    enQueue(item) {
        if (this.tail == this.head && this.tail != 0 && this.queue[this.head] ) {
            throw new Error('Queue is full')
        }
        this.queue[this.tail] = item
        if (this.tail == this.size - 1) {
            this.tail = 0
        } else {
            this.tail++
        }
    }

    deQueue() {
        if (this.head == 0 && this.tail == 0) {
            throw new Error('Queue is empty')
        }
        let x = this.queue[this.head]
        if (this.head == this.size) {
            this.head = 0
        }else{
            this.head++
        }
        return x
    }

    printQueue() {
        console.log(this.queue, ` head : ${this.head}, tail : ${this.tail}`)
    }
}

module.exports = Queue

const q = new Queue(5)
try{
    q.enQueue(1)
    q.enQueue(5)
    q.deQueue()
    q.enQueue(-100)
    q.enQueue(90)
    q.deQueue()
    q.enQueue(12)
    q.enQueue(56)
    q.enQueue(909)
    q.deQueue()
    q.enQueue(11)
    // q.enQueue(113)
}catch(e){
    console.log(e)
}
q.printQueue()


