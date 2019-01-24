import * as ActionType from 'Actions/board'
import defaultPreset from 'Src/config/presets/default.json'

export const initialState = {
  rows: defaultPreset.length,
  columns: defaultPreset[0].length,
  matrixFigures: defaultPreset,
  matrixMouse: [],
  theme: 'default',
  players: [[0, 1]]
}

for (let i = 0; i < initialState.rows; i++) {
  initialState.matrixMouse.push(new Array(initialState.columns))
}

export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case ActionType.PUTIN:
      return payload
    default:
      return state
  }
}