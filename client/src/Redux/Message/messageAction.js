const msgOne = 'msgOne'
const msgTwo = 'msgTwo'

const msgOneAction = () => {
    return {
        type: msgOne
    }
}
const msgTwoAction = () => {
    return {
        type: msgTwo
    }
}

export { msgOne, msgTwo, msgOneAction, msgTwoAction }