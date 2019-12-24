import {
  ACTION_LOAD_USERS, ACTION_LOAD_REPOS, ACTION_LOADED
} from './types'

export const COS_LOAD_USERS = (data) => ({
  type: ACTION_LOAD_USERS,
  payload: data,
})

export const COS_LOAD_REPOS = (data) => ({
  type: ACTION_LOAD_REPOS,
  payload: data,
})

export const COS_LOADED = (data) => ({
  type: ACTION_LOADED,
  payload: data,
})
