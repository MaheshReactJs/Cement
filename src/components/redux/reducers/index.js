import { combineReducers } from 'redux';
import userReducer from './userreducer';
import appinforeducer from './appinforeducer'
const rootReducer = combineReducers({
    userReducer,
    appinforeducer
})

export default rootReducer