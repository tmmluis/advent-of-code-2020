const two = (input) => {
    // Parsing the expenses into an array of integers and sort it in ascending order
    const expenses = input.split('\n').map(expense => parseInt(expense, 10)).sort((a, b) => a - b)

    // As given by the puzzle
    const sum = 2020

    for (let i = 0; i < expenses.length - 3; i++) {
        let expense = expenses[i]
        let left = i + 1
        let right = expenses.length - 1

        while (left < right) {
            if (expenses[left] + expenses[right] + expense === sum) return expenses[left] * expenses[right] * expense
            if (expenses[left] + expenses[right] + expense > sum) right--
            if (expenses[left] + expenses[right] + expense < sum) left++
        }
    }

    return 0
}

module.exports = two