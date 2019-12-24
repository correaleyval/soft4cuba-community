import  { combineReducers } from 'redux'

import loginReducer from './loginReducer'
import userReducer from './userReducer'
import cosReducer from './cosReducer'

export const rootReducer = combineReducers({
    loginReducer,
    userReducer,
    cosReducer
})
