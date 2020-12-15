const one = (input) => {
    while (input.length < 2020) {
        let next = getNext(input)
        input.push(next)
    }

    return input[input.length - 1]
}

const getNext = (arr) => {
    const last = arr[arr.length - 1]
    const reversed = [...arr].reverse().slice(1)
    const indexFound = reversed.findIndex(element => element === last)

    if (indexFound === -1) return 0
    
    return indexFound + 1
}

module.exports = one