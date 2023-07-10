import { SET_PAGINATION } from '../actionsCreators/actionsTable'

const initialState = {
  paginatedList: [], 
}

const tableReducer = (state = initialState, action) => {
  switch(action.type) {
  case SET_PAGINATION:
    return { ...state, paginatedList: [ ...action.payload ] }
  default:
    return state
  }
}

export default tableReducer