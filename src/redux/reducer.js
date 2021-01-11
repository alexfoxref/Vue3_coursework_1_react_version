import { actions, initialState } from './constants'

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_ISFINISHED:
      return {
        ...state,
        isFinished: action.payload,
      }
    case actions.SET_ACTIVE:
      return {
        ...state,
        steps: state.steps.map((step, idx) => {
          const newStep = { ...step }

          newStep.active = false
          newStep.done = false

          if (idx === action.payload) {
            newStep.active = true
          }

          if (idx < action.payload) {
            newStep.done = true
          }

          return newStep
        }),
        isFinished: false,
      }
    default:
      return state
  }
}
