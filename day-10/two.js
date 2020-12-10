const _ = require('lodash')

const two = (input, target) => {
    const data = input.split('\n').map(number => parseInt(number, 10))
    let set = []

    for (let i = 0; i < data.length; i++) {
        set.push(data[i])

        if (set.length > 1) {
            let sum = set.reduce((accumulator, current) => accumulator + current)

            while (sum > target) {
                set = set.slice(1)
                sum = set.reduce((accumulator, current) => accumulator + current)
            }

            if (sum === target) {
                return _.min(set) + _.max(set)
            }
        }
    }
}

module.exports = two