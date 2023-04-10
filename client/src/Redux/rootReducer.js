import { combineReducers } from 'redux'
import { messageReducer } from './Message/messageReducer'
import { counterReducer } from './Counter/counterReducer';
import { HandleClickReducer } from './HandleClick/handleClickReducer';

const rootReducer = combineReducers({
    messages: messageReducer,
    counter: counterReducer,
    isOpen: HandleClickReducer

});

export { rootReducer }