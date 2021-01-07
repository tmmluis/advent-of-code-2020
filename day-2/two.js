const two = (input) => {
    const lines = input.split(/\r?\n/)
    let count = 0

    lines.forEach(line => {
        const [policy, password] = line.split(':')
        const [positions, letter] = policy.split(' ')
        const [first, second] = positions.split('-')

        let valid = false

        if (password[first] === letter) valid = !valid
        if (password[second] === letter) valid = !valid
        if (valid) count++
    })

    return count
}

module.exports = two