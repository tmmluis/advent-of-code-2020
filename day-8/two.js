const _ = require('lodash')
const fs = require('fs')

const two = (input) => {
    const instructions = input.split('\n').map((element) => {
        const instruction = element.split(' ')
        return {
            operation: instruction[0],
            argument: instruction[1]
        }
    })

    for (let i = 0; i < instructions.length; i++) {
        if (instructions[i].operation !== 'acc') {
            let clone = _.cloneDeep(instructions)
            clone[i].operation === 'jmp' ? clone[i].operation = 'nop' : clone[i].operation = 'jmp'
            let solution = runCode(clone)
            if (solution !== undefined) {
                return solution
            }
        }
    }
}

// Runs a set of instructions and returns the accumulator value if it terminates normally (no loop encountered)
// Returns undefined otherwise
const runCode = (instructions) => {
    let accumulator = 0
    let index = 0

    while (instructions[index] && !instructions[index].visited) {
        instructions[index].visited = true

        switch (instructions[index].operation) {
            case 'acc':
                accumulator += parseInt(instructions[index].argument, 10)
                index++
                break
            case 'jmp':
                index += parseInt(instructions[index].argument, 10)
                break
            case 'nop':
                index++
                break
        }
    }

    if (index === instructions.length) {
        return accumulator
    } else {
        return undefined
    }
}

fs.readFile('day-8/input.txt', (err, data) => {
    if (err) throw err;
    console.log(two(data.toString()));
});

module.exports = two