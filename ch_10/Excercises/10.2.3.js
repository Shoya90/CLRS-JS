const SinglyLinkedList = require('../SinglyLinkedList')

class Queue extends SinglyLinkedList {
    constructor(length) {
        super()
        this.tail = this._listItem()
        this.length = length
        this.counter = 0
    }

    enQueue(key){
        if(this.counter == this.length){
            throw new Error('Queue is full')
        }
        let item = this._listItem(key)
        if(!this.head.next){
            this.head.next = item
            this.tail.next = item
        }
        else{

            this.tail.next.next = item
            this.tail.next = item
        }
        this.counter++
    }

    deQueue(){
        if(this.counter == 0 || !this.head.next){
            throw new Error('Queue is empty')
        }
        else{
            let r = this.head.next
            let t = this.head.next.next
            this.head.next = t
            return r
        }
    }
}

const s = new Queue(5)
try {
    s.enQueue(1)
    s.enQueue(3)
    s.enQueue(5)
    s.enQueue(9)
    console.log(s.deQueue())
    console.log(s.deQueue())
    console.log(s.deQueue())
    console.log(s.deQueue())
    s.enQueue(11)
    console.log(s.deQueue())
} catch (error) {
    console.log(error)
}