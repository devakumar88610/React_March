const INCR = 'INCR'
const DECR = 'DECR'

const incrementAction = () => {
    return {
        type: INCR
    }
}

const decrementAction = () => {
    return {
        type: DECR
    }
}

export { incrementAction, decrementAction, INCR, DECR }