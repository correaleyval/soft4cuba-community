import {
    ACTION_LOAD_USER
} from '../actions/types'

const initialState = {}

export default (state=initialState, action) => {
    switch(action.type) {
        case ACTION_LOAD_USER:
            return {
                ...action.payload
            }
        default:
            return state
    }
}