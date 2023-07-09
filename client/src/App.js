import './styles/App.scss'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


import Header from './components/Header/Header'
import Spreadsheet from './components/Spreadsheet/Spreadsheet'
import { getInfoUsers } from './redux/asyncActionsCreators/asyncActionUsers'

function App() {

  const [isEditMode, setIsEditMode] = useState(false)
  const { them } = useSelector((state) => state.them)
 
  const dispatch = useDispatch()

  const columns = [
    { id: 1, field: 'username', fieldName: 'Пользователь', type: 'text', key: '765475' },
    { id: 2, field: 'phone', fieldName: 'Номер телефона', type: 'tel', key: '3535345' },
    { id: 3, field: 'email', fieldName: 'Email', type: 'email', key: '34634321' },
    { id: 4, field: 'register_date', fieldName: 'Дата регистрации', type: 'date', key: '939842' },
    { id: 5, field: 'code', fieldName: 'Код', type: 'number', key: '4564564' },
    { id: 6, field: 'city', fieldName: 'Город', type: 'text', key: '2343456' },
  ]

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
