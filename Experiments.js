//Data Storage
//Position variable
const info = {
    position: ["First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Nineth", "Tenth", "Eleventh", "Twelveth"],
    greenShell: {
        item: "Green Shell",
        math: [50, 35, 20, 10, 5, 0, 0, 0, 0, 0, 0, 0]
    },
    redShell: {
        item: "Red Shell",
        math: [65, 85, 60, 40, 25, 15, 10, 5, 0, 0, 0, 0]
    },
    banana: {
        item: "Banana",
        math: [140, 120, 80, 50, 30, 0, 0, 0, 0, 0, 0, 0]
    },
    fakeBox: {
        item: "Fake Item Box",
        math: [175, 140, 90, 55, 35, 0, 0, 0, 0, 0, 0, 0]
    },
    mushroom: {
        item: "Mushroom",
        math: [0, 160, 125, 95, 65, 40, 25, 10, 0, 0, 0, 0]
    },
    threeMushroom: {
        item: "Triple Mushroom",
        math: [0, 0, 135, 115, 100, 90, 80, 75, 70, 50, 40, 25]
    },
    bomb: {
        item: "Bomb",
        math: [0, 165, 150, 130, 110, 100, 0, 0, 0, 0, 0, 0]
    },
    blueShell: {
        item: "Blue Shell",
        math: [0, 0, 0, 135, 120, 115, 90, 80, 0, 0, 0, 0]
    },
    lightning: {
        item: "Lightning",
        math: [0, 0, 0, 0, 0, 0, 0, 0, 75, 65, 65, 70]
    },
    star: {
        item: "Star",
        math: [0, 0, 0, 0, 0, 0, 105, 105, 115, 110, 105, 100]
    },
    goldMushroom: {
        item: "Gold Mushroom",
        math: [0, 0, 0, 0, 0, 125, 135, 150, 170, 170, 160, 150]
    },
    megaMushroom: {
        item: "Mega Mushroom",
        math: [0, 0, 0, 140, 130, 145, 150, 160, 0, 0, 0, 0]
    },
    blooper: {
        item: "Blooper",
        math: [0, 0, 0, 145, 140, 160, 165, 170, 175, 0, 0, 0,]
    },
    powBlock: {
        item: "POW",
        math: [0, 0, 0, 0, 150, 170, 180, 180, 180, 0, 0, 0]
    },
    thunderCloud: {
        item: "Thunder Cloud",
        math: [0, 0, 160, 165, 165, 180, 185, 0, 0, 0, 0, 0]
    },
    bulletBill: {
        item: "Bullet Bill",
        math: [0, 0, 0, 0, 0, 0, 0, 190, 200, 200, 200, 200]
    },
    tripleGreenShell: {
        item: "Triple Green Shell",
        math: [0, 175, 185, 180, 175, 0, 0, 0, 0, 0, 0, 0]
    },
    tripleRedShell: {
        item: "Triple Red Shell",
        math: [0, 0, 0, 195, 200, 200, 200, 200, 0, 0, 0, 0]
    },
    tripleBanana: {
        item: "Triple Banana",
        math: [200, 200, 200, 200, 0, 0, 0, 0, 0, 0, 0, 0]
    }
}

//Functions
//Position Generation
const randomPlace = (numOfRacers) => {
    num = Math.floor(Math.random() * numOfRacers)
    return num
}
let whereAmI = randomPlace(12)
// console.log(whereAmI)//test

//Item Generation
const numberGenerator = () => {
    let chance = Math.floor(Math.random() * 200 + 1)
    return chance
}
let itemFinder = numberGenerator()

// console.log(itemFinder)//test
//Master Function
const masterFunction = () => {
    console.log(`You are in ${info.position[whereAmI]}.`)
    //console.log(whereAmI)//whereAmI test
    if (itemFinder <= info.greenShell.math[whereAmI]) {
        console.log(`Random item:${info.greenShell.item}`)
    }
    else if (itemFinder <= info.redShell.math[whereAmI]) {
        console.log(`Random item:${info.redShell.item}`)
    }
    else if (itemFinder <= info.banana.math[whereAmI] && !0) {
        console.log(`Random item:${info.banana.item}`)
    }
    else if (itemFinder <= info.fakeBox.math[whereAmI] && !0) {
        console.log(`Random item:${info.fakeBox.item}`)
    }
    else if (itemFinder <= info.mushroom.math[whereAmI] && !0) {
        console.log(`Random item:${info.mushroom.item}`)
    }
    else if (itemFinder <= info.threeMushroom.math[whereAmI] && !0) {
        console.log(`Random item:${info.threeMushroom.item}`)
    }
    else if (itemFinder <= info.bomb.math[whereAmI] && !0) {
        console.log(`Random item:${info.bomb.item}`)
    }
    else if (itemFinder <= info.blueShell.math[whereAmI] && !0) {
        console.log(`Random item:${info.blueShell.item}`)
    }
    else if (itemFinder <= info.lightning.math[whereAmI] && !0) {
        console.log(`Random item:${info.lightning.item}`)
    }
    else if (itemFinder <= info.star.math[whereAmI] && !0) {
        console.log(`Random item:${info.star.item}`)
    }
    else if (itemFinder <= info.goldMushroom.math[whereAmI] && !0) {
        console.log(`Random item:${info.goldMushroom.item}`)
    }
    else if (itemFinder <= info.megaMushroom.math[whereAmI] && !0) {
        console.log(`Random item:${info.megaMushroom.item}`)
    }
    else if (itemFinder <= info.blooper.math[whereAmI] && !0) {
        console.log(`Random item:${info.blooper.item}`)
    }
    else if (itemFinder <= info.powBlock.math[whereAmI] && !0) {
        console.log(`Random item:${info.powBlock.item}`)
    }
    else if (itemFinder <= info.thunderCloud.math[whereAmI] && !0) {
        console.log(`Random item:${info.thunderCloud.item}`)
    }
    else if (itemFinder <= info.bulletBill.math[whereAmI] && !0) {
        console.log(`Random item:${info.bulletBill.item}`)
    }
    else if (itemFinder <= info.tripleGreenShell.math[whereAmI] && !0) {
        console.log(`Random item:${info.tripleGreenShell.item}`)
    }
    else if (itemFinder <= info.tripleRedShell.math[whereAmI] && !0) {
        console.log(`Random item:${info.tripleRedShell.item}`)
    }
    else if (itemFinder <= info.tripleBanana.math[whereAmI] && !0) {
        console.log(`Random item:${info.tripleBanana.item}`)
    }
    //console.log(itemFinder)//itemFinder test
}

masterFunction()