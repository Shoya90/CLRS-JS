matrix_mult = (A, B) => {
    let cols = A[0].length
    let rows = A.length
    let C = [[], [], [], [], [], [], []]
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < rows; j++) {
            C[i][j] = 0
            for (let k = 0; k < cols; k++) {
                C[i][j] += A[i][k] * B[k][j]
            }
        }
    }
    return C
}

A = [
    [1, 2, 5, 77, 454, 300, 24],
    [-2, 3, 12, 67, 900, 45, 56]
]
B = [
    [0, -1],
    [0, 3],
    [44, 12200],
    [3, -901],
    [10, -34],
    [340, 1],
    [4, 1]
]
console.log(matrix_mult(B, A))