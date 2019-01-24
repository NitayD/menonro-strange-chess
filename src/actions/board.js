export const PUTIN = Symbol('PUTIN')

export const setPutin = (payload) => {
  return {
    type: PUTIN,
    payload: payload
  }
}