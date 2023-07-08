import { combineReducers } from 'redux'

import usersReducer from './users.reducer'
import modeReducer from './mode.reducer'

const rootReducer = combineReducers({
  users: usersReducer,
  modes: modeReducer,
})

export default rootReducer