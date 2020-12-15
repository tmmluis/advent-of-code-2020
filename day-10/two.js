const two = (input) => {
    // Parse input data to an ordered array of integers
    const adapters = input.split('\n').map(adapter => parseInt(adapter, 10)).sort((a, b) => a - b)
    
    // Adding the 'joltage' of the charging outlet (0) to the first position
    // and my device's (3 higher than the highest-rated adapter) to the last position.
    adapters.unshift(0)
    adapters.push(adapters[adapters.length - 1] + 3)

    // Iterate the adapters array once to find and store indexes of adapters that are fixed
    // i.e. cannot be removed because they are 3 units away from one of their neighbours.
    const fixed = []

    // First one is always fixed
    fixed.push(0)

    for (let i = 1; i < adapters.length - 1; i++) {
        
        let left = adapters[i - 1]
        let current = adapters[i]
        let right = adapters[i + 1]

        if (current - left >= 3 || right - current >= 3) {
            fixed.push(i)
        }
    }
    // Last one is always fixed
    fixed.push(adapters.length - 1)

    // Counting possible combinations for each sub-array (between fixed elements)
    let combinations = 1
    for (let i = 0; i < fixed.length - 1; i++) {
        let start = fixed[i]
        let end = fixed[i + 1]
        combinations = combinations * countCombinations(adapters.slice(start, end + 1))
    }

    return combinations
}

// Counts how many different ways an array can be arranged under the condition that elements cannot be more than 3 units from each other.
// First and last element cannot be removed.
const countCombinations = (arr, start = 1) => {
    let combinations = 1

    if (arr.length < 3) return combinations
    
    for (let i = start; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i - 1] <= 3) {
            let newArray = [...arr]
            newArray.splice(i, 1)
            combinations += countCombinations(newArray, i)
        }
    }
     return combinations
}

exports.two = two
exports.countCombinations = countCombinations