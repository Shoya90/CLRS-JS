
class LinkedList {
    constructor(){
        this.list = []
        this.head = this._listItem()
    }

    size(){
        return this.list.length
    }

    insert(key){
        let x = this._listItem(null, key, null)
        x.next = this.head.next

        if(this.head.next){
            this.head.next.prev = x
        }

        this.head.next = x
        x.prev = this.head
        this.list.push(x)
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


let ll = new LinkedList()

ll.insert(1)
ll.insert(4)
ll.insert(5)
console.log(ll.list[2].prev.key);

ll.printList()