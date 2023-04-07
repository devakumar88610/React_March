const MSG_ONE = 'MSG_ONE'
const MSG_TWO = 'MSG_TWO'

const msgOneAction = () => {
    return {
        type: MSG_ONE
    }
}
const msgTwoAction = () => {
    return {
        type: MSG_TWO
    }
}

export { MSG_ONE, MSG_TWO, msgOneAction, msgTwoAction }