import { combineReducers } from 'redux'

import usersReducer from './users.reducer'
import modeReducer from './mode.reducer'
import themReducer from './them.reducer'

const rootReducer = combineReducers({
  users: usersReducer,
  modes: modeReducer,
  them:themReducer,
})

export default rootReducer