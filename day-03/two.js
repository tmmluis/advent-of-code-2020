const two = (input) => {
    const map = {}
    const slopes = [
        [1, 1],
        [3, 1],
        [5, 1],
        [7, 1],
        [1, 2]
    ]
    let bottom = 0

    input.split(/\r?\n/).forEach((line, index) => {
        map[index] = line
        bottom++
    })

    const width = map[0].length
    let total = 1

    slopes.forEach(slope => {

        let [xPos, yPos] = [0, 0]
        let trees = 0

        while (yPos < bottom - 1) {
            xPos += slope[0]
            yPos += slope[1]

            if (xPos >= width) xPos -= width
            if (map[yPos][xPos] === '#') trees++
        }
        total *= trees
    })

    return total
}

module.exports = two