import { CHANGE_MODE_EDIT } from '../actionsCreators/actionsModeEdit'

const initialState = {
  mode: false,
}

const modeReducer = (state = initialState, action) => {
  switch (action.type) {
  case CHANGE_MODE_EDIT:
    return { ...state, mode: !state.mode }
  default:
    return state
  }
}

export default modeReducer