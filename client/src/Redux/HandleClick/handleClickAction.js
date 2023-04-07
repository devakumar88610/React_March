const OPEN = 'OPEN'
const CLOSE = 'CLOSE'

const handleOpenAction = () => {
    return { type: OPEN }
}

const handleCloseAction = () => {
    return { type: CLOSE }
}

export { handleOpenAction, handleCloseAction, OPEN, CLOSE }