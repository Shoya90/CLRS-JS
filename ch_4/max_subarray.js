find_max_crossing_subarray = (A, low, mid, high) => {
    let left_sum = -Infinity
    let sum = 0
    let max_left = 0
    for(let i=mid; i>=low; i--){
        sum += A[i]
        if(sum > left_sum){
            left_sum = sum
            max_left = i
        }
    }
    let right_sum = -Infinity
    sum = 0
    let max_right = 0
    for(let i=mid + 1; i<high; i++){
        sum += A[i]
        if(sum > right_sum){
            right_sum = sum
            max_right = i
        }
    }
    return [max_left, max_right, left_sum + right_sum]
}

find_max_subarray = (A, low, high) => {
    if(low === high){
        return [low, high, A[low]]
    }
    else{
        let mid = Math.floor((low + high) / 2)
        let [ left_low, left_high, left_sum ] = [...find_max_subarray(A, low, mid)]
        let [ right_low, right_high, right_sum ] = [...find_max_subarray(A, mid + 1, high)]
        let [ crossing_low, crossing_high, crossing_sum ] = [...find_max_crossing_subarray(A, low, mid, high)]

        if(left_sum > right_sum && left_sum > crossing_sum){
            console.log('L ', left_low, left_high, left_sum)
            return [left_low, left_high, left_sum]
        }
        else if(right_sum > left_sum && right_sum > crossing_sum){
            console.log('R ', right_low, right_high, right_sum)            
            return [right_low, right_high, right_sum]
        }
        else{
            console.log('C ',crossing_low, crossing_high, crossing_sum)
            return [crossing_low, crossing_high, crossing_sum ]
        }

    }
}

// A = [1,-5,4,-2,-3,5]
// find_max_subarray(A, 1, 6)

Util = require('../Utils')
A = Util.randomArrayWithNegatives(10)
// A = [ 9, 5, 2, -5, -6, -4, -10, -3, 6, -1 ]
Util.AlgorithmInfoLog(find_max_subarray, [A, 0, A.length], true)
