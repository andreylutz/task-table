import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './styles/App.scss'

import Header from './components/Header/Header'
import Spreadsheet from './components/Table/Spreadsheet'
import { getInfoUsers } from './redux/asyncActionsCreators/asyncActionUsers'

function App() {

  const columns = [
    { id: 1, field: 'username', fieldName: 'Пользователь', type: 'text', key: '765475' },
    { id: 2, field: 'phone', fieldName: 'Номер телефона', type: 'text', key: '3535345' },
    { id: 3, field: 'email', fieldName: 'Email', type: 'text', key: '34634321' },
    { id: 4, field: 'register_date', fieldName: 'Дата регистрации', type: 'text', key: '939842' },
    { id: 5, field: 'code', fieldName: 'Код', type: 'text', key: '4564564' },
    { id: 6, field: 'city', fieldName: 'Город', type: 'text', key: '2343456' },
  ]

  const dispatch = useDispatch()

  const { listInfo } = useSelector((state) => state.users)

  useEffect(() => {
    
    dispatch(getInfoUsers())
  }, [dispatch])

  return (
    <>
      <Header />
      <Spreadsheet bodyTable={listInfo} headerTable={columns} />
    </>
  )
}

export default App
