import { combineReducers } from 'redux'

import usersReducer from './users.reducer'
import modeReducer from './mode.reducer'
import themReducer from './them.reducer'
import tableReducer from './table.reduser'

const rootReducer = combineReducers({
  users: usersReducer,
  modes: modeReducer,
  them: themReducer,
  paginated: tableReducer,
})

export default rootReducer