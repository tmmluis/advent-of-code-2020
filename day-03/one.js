const one = (input) => {
    const map = {}
    let bottom = 0

    input.split(/\r?\n/).forEach((element, index) => {
        map[index] = element
        bottom++
    })

    let [xPos, yPos] = [0, 0]
    let width = map[0].length 
    let trees = 0
    
    while (yPos < bottom - 1) {
        xPos += 3
        yPos += 1
        
        if (xPos >= width) xPos -= width
        if (map[yPos][xPos] === '#') trees++
    }

    return trees
}

module.exports = one