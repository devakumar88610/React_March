import { INCR, DECR } from './counterAction'

const initialState = {
    counter: 1
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCR:
            return { counter: state.counter + 1 }
        case DECR:
            if (state.counter > 1) {
                return { counter: state.counter - 1 }
            }
        default:
            return state
    }
}

export { counterReducer }