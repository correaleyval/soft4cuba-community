import {
    ACTION_SET_LOGIN
} from '../actions/types'

const initialState = {
    login: false
}

export default (state=initialState, action) => {
    switch(action.type) {
        case ACTION_SET_LOGIN:
            return {
                ...state,
                login: action.payload
            }
        default:
            return state
    }
}