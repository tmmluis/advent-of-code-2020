const one = (input) => {
    // Parsing the expenses into an array of integers and sort it in ascending order
    const expenses = input.split('\n').map(expense => parseInt(expense, 10)).sort((a, b) => a - b)

    // As given by the puzzle
    const sum = 2020

    let left = 0
    let right = expenses.length - 1

    while (left < right) {
        if (expenses[left] + expenses[right] === sum) return expenses[left] * expenses[right]
        if (expenses[left] + expenses[right] > sum) right--
        if (expenses[left] + expenses[right] < sum) left++
    }

    return 0
}

module.exports = one