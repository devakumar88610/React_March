import { combineReducers } from 'redux'
import { messageReducer } from './Message/messageReducer'

const rootReducer = combineReducers({
    messages: messageReducer
});

export { rootReducer }