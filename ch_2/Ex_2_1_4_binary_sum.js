A = [1, 1, 1]
B = [0, 1, 1]
C = [0, 0, 0, 0]

binary_sum = (A, B, C) => {
    extra = 0
    for (i = A.length - 1; i >= 0; i--) {
        res = A[i] + B[i] + extra
        switch (res) {
            case 0:
                C[i + 1] = 0
                extra = 0
                break
            case 1:
                C[i + 1] = 1
                extra = 0
                break
            case 2:
                C[i + 1] = 0
                extra = 1
                break
            case 3:
                C[i + 1] = 1
                extra = 1
                break
        }
    }

    if (extra) {
        C[0] = 1
    }

}

binary_sum(A, B, C)
console.log(C);
