const one = (input) => {
    // Parse input data to an ordered array of integers
    const adapters = input.split('\n').map(adapter => parseInt(adapter, 10)).sort((a, b) => a - b)
    
    // Adding the 'joltage' of the charging outlet (0) and my device (3 higher than the highest-rated adapter)
    adapters.unshift(0)
    adapters.push(adapters[adapters.length - 1] + 3)
    
    let ones = 0
    let threes = 0

    for (let i = 0; i < adapters.length - 1; i++) {
        let difference = adapters[i + 1] - adapters[i]

        if (difference === 1) ones++
        if (difference === 3) threes++
    }

    return ones * threes
}

module.exports = one