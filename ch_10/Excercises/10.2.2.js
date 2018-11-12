const SinglyLinkedList = require('../SinglyLinkedList')

class Stack extends SinglyLinkedList {
    constructor() {
        super()
    }

    push(key) {
        this.insert(key)
    }

    pop() {
        let x
        if (this.head.next) {
            x = this.head.next
            this.head.next = this.head.next.next
            this.list.splice(0, 1)
            return x
        }
        else {
            throw new Error('Stack is Empty')
        }
    }
}

const s = new Stack()
try {
    s.push(1)
    s.push(3)
    s.push(5)
    s.push(9)
    console.log(s.pop())
    console.log(s.pop())
    console.log(s.pop())
    console.log(s.pop())
    s.push(11)
    s.push(45)
    console.log(s.pop())
} catch (error) {
    console.log(error)
}