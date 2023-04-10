import { OPEN, CLOSE } from './handleClickAction'

const initialState = {
    isOpen: false
}

const HandleClickReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN:
            return { isOpen: true }
        case CLOSE:
            return { isOpen: false }
        default:
            return state
    }
}

export { HandleClickReducer }