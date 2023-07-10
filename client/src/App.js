import './styles/App.scss'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { columns } from './data'
import Header from './components/Header/Header'
import Spreadsheet from './components/Spreadsheet/Spreadsheet'
import { getInfoUsers } from './redux/asyncActionsCreators/asyncActionUsers'

function App() {

  const [isEditMode, setIsEditMode] = useState(false)
  const { them } = useSelector((state) => state.them)
 
  const dispatch = useDispatch()

  useEffect(() => {
    
    dispatch(getInfoUsers())
  }, [dispatch])

  localStorage.setItem('thema', them)

  return (
    <>
      <Header isEditMode={isEditMode} />
      <Spreadsheet isEditMode={isEditMode} setIsEditMode={(row) => setIsEditMode(row)}  headerTable={columns} />
    </>
  )
}

export default App
