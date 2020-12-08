const one = (input) => {
    const instructions = input.split('\n').map((element) => {
        const instruction = element.split(' ')
        return {
            operation: instruction[0],
            argument: instruction[1]
        }
    })

    let accumulator = 0
    let index = 0

    while (!instructions[index].visited) {
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

    return accumulator
}

module.exports = one