const two = (input, limit = 30000000) => {
    let map = {}
    let current = undefined
    let turn = 1

    // Initializing the map with the initial input (except last number)
    for (let i = 0; i < input.length - 1; i++) {
        current = input[i]
        map[current] = turn
        turn++
    }
    current = input[input.length - 1]

    while (turn < limit) {
        let next = getNext(map, current, turn)
        map[current] = turn
        current = next
        turn++
    }
    
    return current
}

const getNext = (map, current, turn) => {
    if (!map[current]) {
        return 0
    } else {
        return turn - map[current]
    }
}

module.exports = two