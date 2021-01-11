import { actions } from './constants'

export const setIsFinished = bool => ({
  type: actions.SET_ISFINISHED,
  payload: bool,
})

export const setActive = idx => ({
  type: actions.SET_ACTIVE,
  payload: idx,
})
