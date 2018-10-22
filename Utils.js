const chalk = require('chalk')

util = {}
util.randomArray = (n) => {
    A = []
    for (var i = 0; i < n; i++) {
        A.push(Math.floor(Math.random() * 100))
    }
    return A
}

util.randomArrayBetweenRangeString = (from, to, n) => {
    A = []
    for (var i = 0; i < n; i++) {
        A.push(String(Math.floor(Math.random() * (to - from)) + from))
    }
    return A
}

util.randomArrayWithNegatives = (to) => {
    A = []
    for (let i = 0; i < to; i++) {
        var num = Math.floor(Math.random() * to) + 1
        num *= Math.floor(Math.random() * 2) == 1 ? 1 : -1
        A.push(num)
    }
    return A
}

util.AlgorithmInfoLog = (algorithm, A, print_array = true, print_time = true, print_memory = true) => {
    print_array && console.log(chalk.blue([A[0]]))
    print_time && console.time(algorithm.name)
    algorithm(...A)
    print_time && console.timeEnd(algorithm.name)
    print_array && console.log(chalk.bold.green(A[0]))
    used = process.memoryUsage().heapUsed / 1024 / 1024
    print_memory && console.log(chalk.bgRed(`Heap usage :  ${Math.round(used, 2)}MB`))
}

util.exchange = (A, i, j) => {
    let tmp = A[i]
    A[i] = A[j]
    A[j] = tmp
}

module.exports = util