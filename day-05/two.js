const two = (input) => {
    const passes = input.split(/\r?\n/)
    const seats = new Map()

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
        
        if (seats.has(row)) {
            seats.get(row).push(seat)
        } else {
            seats.set(row, [seat])
        }
    })

    let mySeat = undefined

    seats.forEach(row => {
        if (row.length < 8 && row.length > 1) {
            row.sort()
            
            for (let i = 1; i < row.length; i++) {
                if (row[i] - row[i - 1] > 1) mySeat = row[i] - 1
            }
        }
    })

    return mySeat
}

module.exports = two