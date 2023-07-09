import './styles/App.scss'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'


import Header from './components/Header/Header'
import Spreadsheet from './components/Spreadsheet/Spreadsheet'
import { getInfoUsers } from './redux/asyncActionsCreators/asyncActionUsers'

function App() {
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

  return (
    <>
      <Header />
      <Spreadsheet headerTable={columns} />
    </>
  )
}

export default App
