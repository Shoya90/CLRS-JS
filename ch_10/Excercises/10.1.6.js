class Queue {
    constructor(size) {
        this.En_stack = []
        this.De_stack = []
        this.size = size
    }

    enQueue(item) {
        if (this.En_stack.length == this.size) {
            throw new Error('Queue is full')
        }
        this.En_stack.push(item)
    }

    // O(n) n: size of Queue
    deQueue() {
        if (!this.En_stack.length) {
            throw new Error('Queue is empty')
        }
        while (this.En_stack.length != 1) {
            this.De_stack.push(this.En_stack.pop())
        }
        let x = this.En_stack.pop()
        while (this.De_stack.length != 0) {
            this.En_stack.push(this.De_stack.pop())
        }
        return x
    }
}

const q = new Queue(5)
try {
    q.enQueue(2)
    q.enQueue(12)
    q.enQueue(5)
    q.enQueue(64)
    console.log(q.deQueue())
    console.log(q.deQueue())
    q.enQueue(123)
    console.log(q.deQueue())
    console.log(q.deQueue())
    console.log(q.deQueue())
} catch (error) {
    console.log(error)
}

