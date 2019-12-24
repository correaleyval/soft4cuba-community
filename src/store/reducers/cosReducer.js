import {
    ACTION_LOAD_USERS,
    ACTION_LOAD_REPOS,
    ACTION_LOADED,
} from '../actions/types'

const initialState = {
  loaded: false
}

export default (state=initialState, action) => {
    switch(action.type) {
        case ACTION_LOAD_USERS:
            return {
                ...state,
                users: action.payload
            }
        case ACTION_LOAD_REPOS:
            return {
                ...state,
                repos: action.payload
            }
        case ACTION_LOADED:
            return {
              ...state,
              loaded: action.payload
            }
        default:
            return state
    }
}
