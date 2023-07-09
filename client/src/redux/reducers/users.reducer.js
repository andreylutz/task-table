
import { SET_USERS, ADD_USER, REMOVE_USER, UPDATE_USER, PAGINATION_DATA } from '../actionsCreators/actionsUsers'

const initialState = {
  listInfo: [],
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_USERS:
    return { ...state, listInfo: [ ...action.payload ] }
  case ADD_USER:
    return { ...state, listInfo: [ ...state.listInfo, action.payload ] }
  case REMOVE_USER:
    return { ...state, listInfo: state.listInfo.filter((el) => el.id !== action.payload) }
  case UPDATE_USER:
    return { ...state, listInfo: [ ...action.payload.newData ] }
  case PAGINATION_DATA:
    return { listInfo: [ ...action.payload] }
  default:
    return state
  }
}

export default usersReducer
