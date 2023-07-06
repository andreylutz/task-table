
import { SET_USERS, ADD_USER, REMOVE_USER } from '../actionsCreators/actionsUsers'

const initialState = {
  list: [],
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_USERS:
    return { ...state, list: [...action.payload] }
  case ADD_USER:
    return { ...state, list: [action.payload, ...state.list] }
  case REMOVE_USER:
    return { ...state, list: state.list.filter((el) => el.id !== action.payload) }
  default:
    return state
  }
}

export default usersReducer
