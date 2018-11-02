
class DoublyLinkedList {
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
        let x = this._listItem(null, key, null)
        x.next = this.head.next

        if(this.head.next){
            this.head.next.prev = x
        }

        this.head.next = x
        x.prev = this.head
        this.list.unshift(x)
    }

    delete(key){
        let x = this.search(key)
        
        x.prev.next = x.next
        if(x.next)
            x.next.prev = x.prev
            
        this.list.splice(this.list.indexOf(x) ,1)
    }

    _listItem(prev = null, key = null, next = null){
        return {
            prev : prev,
            key : key,
            next : next
        }
    }

    printList(){
        console.log(this.list)
    }

}


let ll = new DoublyLinkedList()

ll.insert(1)
ll.insert(4)
ll.insert(5)
ll.insert(56)
ll.insert(10)
ll.insert(34)
ll.delete(1)
ll.printList()