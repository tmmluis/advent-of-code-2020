const one = (input) => {
    const lines = input.split(/\r?\n/)
    let count = 0

    lines.forEach(line => {
        const [policy, password] = line.split(':')
        const [frequency, letter] = policy.split(' ')
        const [min, max] = frequency.split('-')

        const regex = new RegExp(letter, 'g')
        const found = password.match(regex)

        if (found != null && found.length >= min && found.length <= max) {
            count++
        }
    })

    return count
}

module.exports = one