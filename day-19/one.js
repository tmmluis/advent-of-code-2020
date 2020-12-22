const one = (input) => {
    const [rules, messages] = input.split(/\r?\n\r?\n/)
    const ruleMap = new Map()
    
    rules.split(/\r?\n/).forEach(rule => {
        const parts = rule.split(': ')
        ruleMap.set(parts[0], parts[1])
    })

    const regEx = new RegExp('^' + parseRules(ruleMap, '0') + '$')
    let count = 0

    messages.split(/\r?\n/).forEach(message => {
        if (regEx.test(message)) count++
    })
    
    return count
}

const parseRules = (map, rule) => {
    let subRules = map.get(rule)

    if (subRules === '"a"' || subRules === '"b"') {
        return subRules.replace(/"/g, '')
    }

    let output = ''
    let capture = false

    if (subRules.includes('|')) {
        capture = true
        output += '('
    }

    subRules = subRules.split(' ')
    subRules.forEach(subRule => {
        if (subRule === '|') {
            output += '|'
        } else {
            output += parseRules(map, subRule)
        }
    })

    if (capture) output += ')'

    return output
}

module.exports = one