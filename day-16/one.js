const one = (input) => {
    const [rules, myTicket, nearbyTickets] = input.split(/\r?\n\r?\n/g)
    

    // Parse the allowed ranges of values into an array
    const ranges = Array.from(rules.matchAll(/\d+/g), element => element[0])
    const validityMap = parseRanges(ranges)

    // Parse all values of nearby tickets into something manageable
    const values = Array.from(nearbyTickets.matchAll(/\d+/g), element => element[0])

    let invalid = []
    values.forEach(value => {
        if (!validityMap[value]) invalid.push(parseInt(value, 10))
    })

    return invalid.reduce((accumulator, current) => accumulator + current)
}

const parseRanges = (ranges) => {
    // todo: maybe fill it with false first?
    let validityMap = []

    for (let i = 0; i < ranges.length - 1; i += 2) {
        let start = ranges[i]
        let end = ranges[i + 1]

        validityMap[start] = true
        validityMap[end] = true

        validityMap = validityMap.fill(true, start, end)
    }

    return validityMap
}



module.exports = one