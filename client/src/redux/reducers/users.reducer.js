
import { SET_USERS, ADD_USER, REMOVE_USER, UPDATE_USER } from '../actionsCreators/actionsUsers'

const initialState = {
  listInfo: [],
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_USERS:
    return { ...state, listInfo: [...action.payload] }
  case ADD_USER:
    return { ...state, listInfo: [...state.listInfo, action.payload] }
  case REMOVE_USER:
    return { ...state, listInfo: state.listInfo.filter((el) => el.id !== action.payload) }
  case UPDATE_USER:
    return { ...state, listInfo: [...action.payload.newData] }
  default:
    return state
  }
}

export default usersReducer
