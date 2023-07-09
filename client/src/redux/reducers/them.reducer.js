import { CHANGE_THEM_EDIT } from '../actionsCreators/actionsThem'

const initialState = {
  them: false,
}

const themaReducer = (state = initialState, action) => {
  switch (action.type) {
  case CHANGE_THEM_EDIT:
    return { ...state, them: !state.them }
  default:
    return state
  }
}

export default themaReducer