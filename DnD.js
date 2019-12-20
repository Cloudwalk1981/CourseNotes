let D20One = Math.floor(Math.random() * 20 + 1)
let D20Two = Math.floor(Math.random() * 20 + 1)
let hitRolls = [D20One, D20Two]

const attackAction = (advantage, attackMod, AC) => {
    if (advantage == true) {
        console.log(`With advantage you rolled a ${Math.max(D20One, D20Two)} with a + ${attackMod} against an AC of ${AC}.`)
        if (Math.max(D20One, D20Two) + (attackMod) >= AC) {
            hit = true
            console.log("You hit")
            if (Math.max(D20One, D20Two) === 20) { crit = true }
            else { crit = false }
        }
        else {
            hit = false
            console.log("You missed.")
            if (Math.max(D20One, D20Two) === 20) { crit = true }
            else { crit = false }
        }
    }
    else {
        console.log(`You rolled a ${D20One} with a + ${attackMod} against an AC of ${AC}.`)
        if (Math.max(D20One) + (attackMod) >= AC) {
            hit = true
            console.log("You hit")
            if (Math.max(D20One, D20Two) === 20) { crit = true }
            else { crit = false }
        }
        else {
            hit = false
            if (Math.max(D20One, D20Two) === 20) { crit = true }
            else { crit = false }
        }

    }
    if (hit == false && crit == false) { console.log("You missed your attack. You cause zero damage.") }
}

const damageCalculator = (baseDamage, D4, D6, D8, D10, D12) => {
    let critDamage = (baseDamage + ((Math.floor(Math.random() * 4 + 1) * D4)) +
        (((Math.floor(Math.random() * 6) * 2 + 1) * D6)) +
        (((Math.floor(Math.random() * 8) * 2 + 1) * D8)) +
        (((Math.floor(Math.random() * 10) * 2 + 1) * D10)) +
        (((Math.floor(Math.random() * 12) * 2 + 1) * D12)))

    let totalDamage = (baseDamage + ((Math.floor(Math.random() * 4 + 1) * D4)) +
        ((Math.floor(Math.random() * 6 + 1) * D6)) +
        ((Math.floor(Math.random() * 8 + 1) * D8)) +
        ((Math.floor(Math.random() * 10 + 1) * D10)) +
        ((Math.floor(Math.random() * 12 + 1) * D12)))
    if (crit == true) { console.log(`Your critical attack caused ${critDamage} damage.`) }
    else if (hit == true) { console.log(`Your attack caused ${totalDamage} damage.`) }

}

attackAction(true, 9, 24)

damageCalculator(18, 0, 0, 1, 0, 0)

