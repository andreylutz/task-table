
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getInfoUsers } from './redux/asyncActionsCreators/asyncActionUsers'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getInfoUsers())
  }, [dispatch])
  
  return (
    <div className="app">

    </div>
  )
}

export default App
