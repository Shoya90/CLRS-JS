const Queue  = require('../Queue')

class Stack {
    constructor(size){
        this.Push_queue = new Queue(size)
        this.Pop_queue = new Queue(size)
    }

    push(item){
        this.Push_queue.enQueue(item)
    }

    pop(){
        while(this.Push_queue.head != this.Push_queue.tail - 1){
            this.Pop_queue.enQueue(this.Push_queue.deQueue())
        }
        let x = this.Push_queue.deQueue()
        while(!this.Pop_queue.isEmpty()){
            this.Push_queue.enQueue(this.Pop_queue.deQueue())
        }
        return x
    }

}

const s = new Stack(10)

s.push(3)
s.push(4)
console.log(s.pop())
console.log(s.pop())
s.push(6)
s.push(12)
s.push(24)
console.log(s.pop())
console.log(s.pop())
