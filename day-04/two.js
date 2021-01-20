const two = (input) => {
    const passports = input.split(/\r?\n\r?\n/)
    const requiredFields = 'byr iyr eyr hgt hcl ecl pid'.split(' ')
    let validPassports = 0

    passports.forEach(passport => {
        const hasAllFields = requiredFields.every(field => passport.includes(field))

        if (hasAllFields) {
            const fields = passport.split(/\s/)
            
            const isValid = fields.every(field => {
                const [key, value] = field.split(':')

                switch(key) {
                    case 'byr':
                        if (value.length !== 4 || value < 1920 || value > 2002) return false
                        break
                    case 'iyr':
                        if (value.length !== 4 || value < 2010 || value > 2020) return false
                        break
                    case 'eyr':
                        if (value.length !== 4 || value < 2020 || value > 2030) return false
                        break
                    case 'hgt':
                        const match = value.match(/^\d{2,3}(?=(in|cm))/)
                        if (match === null) return false
                        const [number, unit] = match
                        if (unit === 'cm' && (number < 150 || number > 193)) return false
                        if (unit === 'in' && (number < 59 || number > 76)) return false
                        break
                    case 'hcl':
                        if(!value.match(/^#[0-9a-f]{6}$/)) return false
                        break
                    case 'ecl':
                        if(!value.match(/^(amb|blu|brn|gry|grn|hzl|oth)$/)) return false
                        break
                    case 'pid':
                        if(!value.match(/^\d{9}$/)) return false
                        break
                }
                
                return true
            })
            
            if(isValid) validPassports++
        }
    })

    return validPassports
}

module.exports = two