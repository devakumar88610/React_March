import { OPEN, CLOSE } from './handleClickAction'

const initialState = {
    isOpen: false
}

const HandleClickReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN:
            return { state, isOpen: true }
        case CLOSE:
            return { state, isOpen: false }
        default:
            return state
    }
}

export { HandleClickReducer }