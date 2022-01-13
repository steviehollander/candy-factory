const buyChocolate = () => {
    const chocolate = {
        type: "Milk Chocolate"

    }
    return chocolate

}
const milkChocolateBuy = buyChocolate()



const addFlavoring = (nextStep) => {
    nextStep.flavor === "Mint"
    return nextStep
}
const addFlavor = addFlavoring(milkChocolateBuy)

const makeBarkMixture = (nextStep) => {
    if (nextStep.flavor = "Mint")
        nextStep.mixture = true
    else
        nextStep.mixture = false

    return nextStep

}
const barkMixture = makeBarkMixture(addFlavor)


const bakeCandy = (nextStep) => {
    if (nextStep.mixture = true)
        nextStep.bake = true
    else
        nextStep.bake = false
    return nextStep.bake

}

const bakingItUp = bakeCandy(barkMixture)

const breakBark = (nextStep) => {
    if (nextStep.bake = true) return [
        "Mint Chocolate Bark Piece.",
        "Mint Chocolate Bark Piece.",
        "Mint Chocolate Bark Piece.",
        "Mint Chocolate Bark Piece.",
        "Mint Chocolate Bark Piece.",
        "Mint Chocolate Bark Piece.",
    ]

}

const eatBark = breakBark(bakingItUp)

console.log(eatBark)

