const { get } = require("lodash")

const one = (input) => {
  const rules = input.split(/\r?\n/)
  const bags = new Map()
  const validBags = []

  rules.forEach(rule => {
    // Parse each rule to get an outer bag and the array of inner bags it can contain.
    const outerBag = rule.slice(0, rule.indexOf('bags') - 1)
    const innerBags = rule.match(/(?<=\d )(\w|| )+(?= bags?(,||.))/g)

    if (innerBags !== null) {
      if (innerBags.includes('shiny gold')) {
        validBags.push(outerBag)
      } else {
        bags.set(outerBag, innerBags)
      }
    }
  })

  for (let i = 0; i < validBags.length; i++) {
    let bag = validBags[i]
    let outerBag = getOuterBag(bags, bag)
    if (outerBag) {
      bags.delete(outerBag)
      validBags.push(outerBag)
      i = -1
    }
  }

  return validBags.length
}

const getOuterBag = (bags, bag) => {
  for (let [outerBag, innerBags] of bags) {
    if (innerBags.includes(bag)) {
      return outerBag
    }
  }
  return null
}

module.exports = one