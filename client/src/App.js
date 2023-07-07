import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Header from './components/Header/Header'
import Spreadsheet from './components/Table/Spreadsheet'
import { getInfoUsers } from './redux/asyncActionsCreators/asyncActionUsers'

function App() {

  const columns = [
    { field: 'username', fieldName: 'Пользователь', type: 'text' },
    { field: 'phone', fieldName: 'Номер телефона', type: 'text' },
    { field: 'email', fieldName: 'Email', type: 'text' },
    { field: 'register_date', fieldName: 'Дата регистрации', type: 'text' },
    { field: 'code', fieldName: 'Код', type: 'text' },
    { field: 'city', fieldName: 'Город', type: 'text' },
  ]

  const dispatch = useDispatch()

  const { list } = useSelector((state) => state.users)

  useEffect(() => {
    
    dispatch(getInfoUsers())
  }, [dispatch])

  return (
    <>
      <Header />
      <Spreadsheet bodyTable={list} headerTable={columns} />
    </>
  )
}

export default App
