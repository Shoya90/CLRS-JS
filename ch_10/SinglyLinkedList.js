
class SinglyLinkedList {
    constructor(){
        this.list = []
        this.head = this._listItem()
    }

    size(){
        return this.list.length
    }

    search(key){
        let x = this.head
        while(x && x.key != key){
            x = x.next
        }
        return x
    }

    insert(key){
        let x = this._listItem(key, null)
        x.next = this.head.next

        this.head.next = x
        this.list.unshift(x)
    }

    previous(key){
        let x = this.head
        while(x && x.next && x.next.key != key){
            x = x.next
        }
        return x
    }

    delete(key){
        let x = this.search(key)
        let prev = this.previous(key)
        prev.next = x.next
            
        this.list.splice(this.list.indexOf(x) ,1)
    }

    _listItem(key = null, next = null){
        return {
            key : key,
            next : next
        }
    }

    printList(){
        console.log(this.list)
    }

}


let ll = new SinglyLinkedList()

ll.insert(1)
ll.insert(4)
ll.insert(5)
ll.insert(56)
ll.insert(10)
ll.insert(34)
ll.printList()
ll.delete(1)
ll.printList()
