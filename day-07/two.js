const two = (input) => {
  const rules = input.split(/\r?\n/)
  const bags = new Map()
  

  rules.forEach(rule => {
    // Parse each rule to get an outer bag and the array of inner bags it can contain.
    const outerBag = rule.slice(0, rule.indexOf('bags') - 1)
    const innerBags = rule.match(/\d (\w|| )+(?= bags?(,||.))/g)

    bags.set(outerBag, innerBags)
  })

  return countBags(bags, 'shiny gold')
}

// Recursively counts bags
const countBags = (bags, currentBag) => {
  const innerBags = bags.get(currentBag)

  if (innerBags === null) return 0

  let count = 0
  innerBags.forEach(bag => {
    const num = Number(bag[0])
    const color = bag.slice(2)

    count += num + num * countBags(bags, color)
  })

  return count
}

module.exports = two