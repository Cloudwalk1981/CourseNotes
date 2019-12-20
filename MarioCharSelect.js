//Variables and Arrays let
const characters = ["Mario", "Luigi", "Yoshi", "Donky Kong", "Bowser", "Peach"]
const assignedCharacters = []
const kart = ["bike", "kart", "heavy kart"]
const glider = ["plane", "cloud", "balloon", "kite",]
const GPraces = {
    Flower: {
        cup: "Flower",
        races: ["Mario Circuit", "Coconut Mall", "DK Summit", "Wario's Gold Mine"]
    },
    Mushroom: {
        cup: "Mushroom",
        races: ["Daisy Circuit", "Koopa Cape", "Maple Treeway", "Volcano Grumble"]
    },
    Special: {
        cup: "Special",
        races: ["Dry Dry Ruins", "Moonview Highway", "Bowser's Castle", "Rainbow Road"]
    },
    Star: {
        cup: "Star",
        races: ["Luigi Circuit", "Moo Moo Meadows", "Mushroom Gorge", "Toad's Factory"]
    }
}

//number of players function
const setNumberOfPlayers = (numberOfPlayers) => {
    if (numberOfPlayers < 1) { numberOfPlayers = 1 }
    else if (numberOfPlayers > 4) { numberOfPlayers = 4 }
    console.log(`Number of players selected: ${numberOfPlayers}.`)
    return numberOfPlayers
}

//track randomizer and log
randomizer = (i) => {
    let trackPicker = Math.floor(Math.random() * 4)
    let result
    if (trackPicker == 0) {
        result = {
            cupEntered: GPraces.Flower.cup,
            raceEntered: GPraces.Flower.races[Math.floor(Math.random() * 4)]
        }
    }
    else if (trackPicker == 1) {
        result = {
            cupEntered: GPraces.Mushroom.cup,
            raceEntered: GPraces.Mushroom.races[Math.floor(Math.random() * 4)]
        }
    }
    else if (trackPicker == 2) {
        result = {
            cupEntered: GPraces.Special.cup,
            raceEntered: GPraces.Special.races[Math.floor(Math.random() * 4)]
        }
    }
    else if (trackPicker == 3) {
        result = {
            cupEntered: GPraces.Star.cup,
            raceEntered: GPraces.Star.races[Math.floor(Math.random() * 4)]
        }
    }
    if (i == 0) { console.log(`Welcome to the ${result.cupEntered} GP, your first race is ${result.raceEntered}.`) }
    else if (i == 3) { console.log(`Next is the ${result.cupEntered} GP, your last race is ${result.raceEntered}.`) }
    else { console.log(`Next is the ${result.cupEntered} GP, your next race is ${result.raceEntered}.`) }
}

//master function
const GENERATOR = (numOf) => {
    for (let i = 0; i < numOf; i++) {
        const randomCharacter = () => {
            let num = Math.floor(Math.random() * 6 - i)
            let pick = characters.splice(num, 1)
            assignedCharacters.push(...pick)
            return pick
        }
        const randomKart = () => {
            let num = Math.floor(Math.random() * 3)
            let pick = kart[num]
            return pick
        }
        const randomGlider = () => {
            let num = Math.floor(Math.random() * 4)
            let pick = glider[num]
            return pick
        }
        console.log(`You have selected ${randomCharacter()} riding a ${randomKart()} with a ${randomGlider()} glider.`)
    }
    for (let i = 0; i <= 3; i++) {
        randomizer(i)
    }
}

GENERATOR(setNumberOfPlayers(3))