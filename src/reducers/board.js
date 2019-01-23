import * as ActionType from './../actions/board'

export const initialState = 'Putin'

export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case ActionType.PUTIN:
      return payload + ''
    default:
      return state
  }
}