const one = (input) => {
  const groups = input.split(/\r?\n\r?\n/)
  let count = 0

  for (let group of groups) {
    const answers = group.replace(/\r?\n/g, '')
    const unique = []

    for (answer of answers) {
      if (unique.indexOf(answer) < 0) {
        unique.push(answer)
        count++
      }
    } 
  }

  return count
}

module.exports = one
