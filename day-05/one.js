const one = (input) => {
    const passes = input.split(/\r?\n/)
    let highest = 0

    passes.forEach(pass => {
        // Determining the row
        let lower = 0
        let upper = 127

        for (let i = 0; i < 7; i++) {
            let mid = Math.round(lower + (upper - lower) / 2)

            if (pass[i] === 'F') {
                upper = mid - 1
            } else {
                lower = mid
            }
        }

        const row = lower

        // Determining the column
        lower = 0
        upper = 7

        for (let i = 7; i < 10; i++) {
            let mid = Math.round(lower + (upper - lower) / 2)

            if (pass[i] === 'L') {
                upper = mid - 1
            } else {
                lower = mid
            }
        }

        const column = lower
        const seat = row * 8 + column
        
        if (highest < seat) highest = seat
    })

    return highest
}

module.exports = one