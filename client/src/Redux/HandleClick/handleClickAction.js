const OPEN = 'OPEN'
const CLOSE = 'CLOSE'

const openAction = () => {
    return { type: OPEN }
}

const closeAction = () => {
    return { type: CLOSE }
}

export { openAction, closeAction, OPEN, CLOSE }