import './Header.styles.scss'

import { useSelector, useDispatch } from 'react-redux'
import { XSquare } from 'react-bootstrap-icons'
import { Form, InputGroup, Button } from 'react-bootstrap'
import { Search, BrightnessHigh, Moon } from 'react-bootstrap-icons'

import { actionsModeEdit } from '../../redux/actionsCreators/actionsModeEdit'
import { actionsThemEdit } from '../../redux/actionsCreators/actionsThem'
import { actionsUsers } from '../../redux/actionsCreators/actionsUsers'


export default function Header({ isEditMode }) {

  const { mode } = useSelector((state) => state.modes)
  const { listInfo } = useSelector((state) => state.users)
  const { them } = useSelector((state) => state.them)
  const dispatch = useDispatch()

  // Поиск по таблице
  const handleSearchUser = (e) => {
    const { value } = e.target

    const filteredTable = listInfo.filter(dataTable => {
      return dataTable.username.toLowerCase().includes(value.toLowerCase())

    })

    dispatch(actionsUsers.searchUser(filteredTable))
  }


  let explanation

  if (mode) {
    explanation = 'Добавление нового пользователя'
  }

  if (isEditMode) {
    explanation = 'Редактирование'
  }

  if (!mode && !isEditMode) {
    explanation = `Всего пользователей: ${listInfo.length}`
  }

  return (
    <div className="header_form">
      <h4>{explanation}</h4>
      <div className="header_form__section">
        <button className="btn_thema" onClick={() => dispatch(actionsThemEdit.changeThem())}>
          {
            them ? <BrightnessHigh /> : <Moon />
          }
        </button>
        <InputGroup className="search_form__search">
          <Form.Control 
            placeholder="Введите для поиска"
            onChange={handleSearchUser}
          />
          <InputGroup.Text id="basic-addon2">
            <Search />
          </InputGroup.Text>
        </InputGroup>
        <div className="header_group__btn">
          {
            mode ? 
              (
                <>
                  <Button className="header_btn__primary" type="submit" form="example" disabled={isEditMode}>Сохранить</Button>
                  <button className="header_btn__danger"><XSquare onClick={() => dispatch(actionsModeEdit.changeMode())}/></button>
                </>
              ) : (
                <Button className="header_btn__primary" onClick={() => dispatch(actionsModeEdit.changeMode())} disabled={isEditMode}>Добавить</Button>
              )
          }
        </div>
      </div>
    </div>
  )
}
