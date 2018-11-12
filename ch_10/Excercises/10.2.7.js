
const reverse = L => {
    let current = L.head.next
    let next = L.head.next
    let prev = null

    while(next){
        next = current.next
        current.next = prev
        prev = current
        current = next
    }

    L.head.next = prev

    return L
}

const SinglyLinkedList = require('../SinglyLinkedList')

const ll = new SinglyLinkedList()
ll.insert(1)
ll.insert(4)
ll.insert(5)


let llr = reverse(ll)
console.log(llr)
