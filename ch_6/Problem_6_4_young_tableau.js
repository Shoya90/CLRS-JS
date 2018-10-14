/**
 * ATTENTION : NOT FINISHED YET
 */

const utils = require('../Utils')

class YoungTableau {
    constructor(A, n, m) {
        this.n = n - 1
        this.m = m - 1
        this.tableau = A
    }

    extract_min(i, j) {
        let min = this.tableau[i][j]
        if (!this.tableau[i][j + 1] && !this.tableau[i + 1][j]) {
            this.tableau[i][j] = Infinity
            return min
        }
        if (this.tableau[i][j + 1] < this.tableau[i + 1][j]) {
            this.tableau[i][j] = this.tableau[i][j + 1]
            this.tableau[i][j + 1] = min
            return this.extract_min(i, j + 1)
        } else {
            this.tableau[i][j] = this.tableau[i + 1][j]
            this.tableau[i + 1][j] = min
            return this.extract_min(i + 1, j)
        }

    }

    switchItems(i, j) {
        let tmp = this.tableau[i][j]
        this.tableau[i][j] = this.tableau[this.n][this.m]
        this.tableau[this.n][this.m] = tmp
    }

}


let A = [
    [2, 3, 4, 5],
    [8, 9, 12, 14],
    [16, Infinity, Infinity, Infinity],
    [Infinity, Infinity, Infinity, Infinity]
]

const yt = new YoungTableau(A, 4, 4)
const min = yt.extract_min(0, 0)
console.log(min)
console.log(yt.tableau);

