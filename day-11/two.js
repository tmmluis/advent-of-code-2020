const two = (input) => {
  let seats = input.split(/\r?\n/).map(row => row.split(''))
  let currentRound = 0
  let changes = 0

  do {
    // deep cloning the previous seat layout state
    let newSeats = JSON.parse(JSON.stringify(seats))
    changes = 0

    for (let row = 0; row < seats.length; row++) {
      for (let column = 0; column < seats[row].length; column++) {
        let seat = seats[row][column]

        if (seat === '.') continue

        let adjacent = getVisible(seats, row, column)
        let adjacentOccupied = adjacent.match(/#/g)

        if (seat === 'L' && !adjacent.includes('#')) {
          newSeats[row][column] = '#'
          changes++
        } else if (seat === '#' && adjacentOccupied && adjacentOccupied.length >= 5) {
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

const getVisible = (seats, row, column) => {
  let adjacent = ''
  let seat = ''

  // NW
  for (let i = row - 1, j = column - 1; seats[i] && seats[i][j]; i--, j--) {
    seat = seats[i][j]
    if (seat === '#' || seat === 'L') {
      adjacent += seat
      break
    }
  }

  // N
  for (let i = row - 1, j = column; seats[i] && seats[i][j]; i--) {
    seat = seats[i][j]
    if (seat === '#' || seat === 'L') {
      adjacent += seat
      break
    }
  }

  // NE
  for (let i = row - 1, j = column + 1; seats[i] && seats[i][j]; i--, j++) {
    seat = seats[i][j]
    if (seat === '#' || seat === 'L') {
      adjacent += seat
      break
    }
  }

  // E
  for (let i = row, j = column + 1; seats[i] && seats[i][j]; j++) {
    seat = seats[i][j]
    if (seat === '#' || seat === 'L') {
      adjacent += seat
      break
    }
  }

  // SE
  for (let i = row + 1, j = column + 1; seats[i] && seats[i][j]; i++, j++) {
    seat = seats[i][j]
    if (seat === '#' || seat === 'L') {
      adjacent += seat
      break
    }
  }

  // S
  for (let i = row + 1, j = column; seats[i] && seats[i][j]; i++) {
    seat = seats[i][j]
    if (seat === '#' || seat === 'L') {
      adjacent += seat
      break
    }
  }

  // SW
  for (let i = row + 1, j = column - 1; seats[i] && seats[i][j]; i++, j--) {
    seat = seats[i][j]
    if (seat === '#' || seat === 'L') {
      adjacent += seat
      break
    }
  }

  // W
  for (let i = row, j = column - 1; seats[i] && seats[i][j]; j--) {
    seat = seats[i][j]
    if (seat === '#' || seat === 'L') {
      adjacent += seat
      break
    }
  }

  return adjacent
}

module.exports = two