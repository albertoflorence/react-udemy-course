export const createReducer = (initialState, actions) => (
  state = initialState,
  { type, ...action }
) => (actions.hasOwnProperty(type) ? actions[type](state, action) : state)
