const two = (input) => {
  const groups = input.split(/\r?\n\r?\n/)
  let count = 0

  for (const group of groups) {
    let persons = group.split(/\r?\n/)
    let answers = {}

    for (const person of persons) {
      for (const answer of person) {
        if (answer in answers) {
          answers[answer]++
        } else {
          answers[answer] = 1
        }
      }
    }

    for (const answer in answers) {
      if (answers[answer] === persons.length) count++
    }
  }

  return count
}

module.exports = two