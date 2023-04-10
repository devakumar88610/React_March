import { MSG_ONE, MSG_TWO } from './messageAction'

const initialState = {
    message: "Hello, Developers"
}

let messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case MSG_ONE:
            return { ...state, message: 'Welcome to my page' }
        case MSG_TWO:
            return { ...state, message: 'Lets get started' }
        default:
            return state
    }
}

export { messageReducer }