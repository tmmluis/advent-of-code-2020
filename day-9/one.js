const one = (input, preambleSize) => {
    const data = input.split('\n').map(number => parseInt(number, 10))
    let queue = data.slice(0, preambleSize)

    for (let i = preambleSize; i < data.length; i++) {
        let number = data[i]

        if (!hasSum(queue, number)) {
            return number
        }

        queue = queue.slice(1)
        queue.push(number)
    }
}

const hasSum = (arr, sum) => {
    const first = arr[0]

    if (arr.length === 1) {
        return false
    }

    if (arr.slice(1).find(number => number === sum - first)) {
        return true
    }

    return hasSum(arr.slice(1), sum)
}

module.exports = one