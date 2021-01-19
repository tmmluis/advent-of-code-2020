const one = (input) => {
    const passports = input.split(/\r?\n\r?\n/)
    const requiredFields = 'byr iyr eyr hgt hcl ecl pid'.split(' ')
    let validPassports = 0

    passports.forEach(passport => {
        let isValid = true
        requiredFields.forEach(field => {
            if (!passport.includes(field)) isValid = false
        })

        if(isValid) validPassports++
    })

    return validPassports
}

module.exports = one