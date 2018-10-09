random_search = (A, item) => {
    let m = A.length
    let n = 0
    if (!m) {
        console.log('empty array')
        return -1
    }
    while (n < m) {
        let pos = Math.floor(Math.random() * m)
        if (A[pos] == item) {
            console.log(`found item at ${pos}`)
            return pos
        }
        n++
    }
    console.log('item not found')
    return -1
}

let Util = require('../Utils')
Util.AlgorithmInfoLog(random_search, [Util.randomArray(10), 2], true)