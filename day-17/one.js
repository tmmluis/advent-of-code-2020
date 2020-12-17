const one = (input, maxCycles = 6) => {
    // A Set holding active cubes only.
    let activeCubes = new Set()

    // Parse the initial state and add the actve cubes to the set.
    // A cube is just a string representation of its coordinates (xyz) e.g. '1 0 0' (x=1, y=0, z=0).
    input.split(/\r?\n/g).forEach((line, y) => {
        [...line].forEach((element, x) => {
            if (element === '#') {
                let cube = x.toString() + ' ' + y.toString() + ' 0'
                activeCubes.add(cube)
            }
        })
    })

    let stagedCubes = new Set()
    let currentCycle = 0

    while (currentCycle < maxCycles) {
        // Only cubes that are active OR neighboring active cubes, can change state.
        activeCubes.forEach(cube => {
            stagedCubes.add(cube)
            getNeighbors(cube).forEach(neighbor => stagedCubes.add(neighbor))
        })

        let newState = new Set()

        // Loop through each staged cube, check its neighbors, and if it should be active add it to a new set
        stagedCubes.forEach(cube => {
            let activeNeighbors = 0
            getNeighbors(cube).forEach(neighbor => {
                if (activeCubes.has(neighbor)) {
                    activeNeighbors++
                }
            })
            // If a cube is active and exactly 2 or 3 of its neighbors are also active, the cube remains active.
            if (activeCubes.has(cube) && (activeNeighbors === 2 || activeNeighbors === 3)) {
                newState.add(cube)
            }
            // If a cube is inactive but exactly 3 of its neighbors are active, the cube becomes active.
            if (!activeCubes.has(cube) && activeNeighbors === 3) {
                newState.add(cube)
            }
        })

        activeCubes = newState
        currentCycle++
    }

    return activeCubes.size
}

// returns a list of all neighboring cubes
const getNeighbors = (cube) => {
    const [x, y, z] = cube.split(' ').map(number => parseInt(number, 10))
    const neighbors = []

    for (let i = x - 1; i < x + 2; i++) {
        for (let j = y - 1; j < y + 2; j++) {
            for (let k = z - 1; k < z + 2; k++) {
                let neighbor = i.toString() + ' ' + j.toString() + ' ' + k.toString()
                if (i === x && j === y && k === z) {
                    continue
                }
                neighbors.push(neighbor)
            }
        }
    }

    return neighbors
}


module.exports = one