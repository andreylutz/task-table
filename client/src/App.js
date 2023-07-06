
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getInfoUsers } from './redux/asyncActionsCreators/asyncActionUsers'
import Spreadsheet from './components/Table/Spreadsheet'

function App() {

  const columns = [
    { field: 'username', fieldName: 'Пользователь' },
    { field: 'phone', fieldName: 'Номер телефона' },
    { field: 'email', fieldName: 'Email' },
    { field: 'register_date', fieldName: 'Дата регистрации' },
    { field: 'code', fieldName: 'Код' },
    { field: 'city', fieldName: 'Город' },
  ]

  const { list } = useSelector((state) => state.users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getInfoUsers())
  }, [dispatch])

  if (list.length === 0) {
    return
  }
  console.log(list)
  return (
    <>
      <Spreadsheet columns={columns} dataTable={list} />
    </>
  )
}

export default App
