import { msgOne, msgTwo } from './messageAction'

const initialState = {
    message: "Hello, Developers"
}

let messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case msgOne:
            return { message: 'Welcome to my page' }
        case msgTwo:
            return { message: 'Lets get started' }
        default:
            return state
    }

}

export { messageReducer }