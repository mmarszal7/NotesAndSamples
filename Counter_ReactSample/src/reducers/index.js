import { combineReducers } from 'redux';
import { counterReducer } from './counter'
import { placeholderReducer } from './placeholder'
import { timerReducer } from './timer'

export default combineReducers({
    counter: counterReducer,
    placeholder: placeholderReducer,
    timer: timerReducer,
});