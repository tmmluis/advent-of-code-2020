const one = (input) => {
  let seats = input.split(/\r?\n/).map(row => row.split(''))
  const maxRounds = 6
  let currentRound = 0
  let changes = 0

  do {
    // deep cloning the previous seat layout state
    let newSeats = JSON.parse(JSON.stringify(seats))
    changes = 0

    for (let row = 0; row < seats.length; row++) {
      for (let column = 0; column < seats[row].length; column++) {
        let seat = seats[row][column]
        let adjacent = getAdjacent(seats, row, column)
        let adjacentOccupied = adjacent.match(/#/g)

        if (seat === 'L' && !adjacent.includes('#')) {
          newSeats[row][column] = '#'
          changes++
        } else if (seat === '#' && adjacentOccupied && adjacentOccupied.length >= 4) {
          newSeats[row][column] = 'L'
          changes++
        }
      }
    }
    seats = newSeats
    currentRound++
  } while (changes !== 0)

  let occupied = 0
  seats.forEach(row => {
    row.forEach(seat => {
      if (seat === '#') occupied++
    })
  })

  return occupied
}

const getAdjacent = (seats, row, column) => {
  let adjacent = ''

  for (let i = row - 1; i <= row + 1; i++) {
    for (let j = column - 1; j <= column + 1; j++) {
      if (i === row && j === column) continue
      if (seats[i] !== undefined && seats[i][j] !== undefined) {
        let seat = seats[i][j]
        adjacent = adjacent.concat(seat)
      }
    }
  }

  return adjacent
}

module.exports = one