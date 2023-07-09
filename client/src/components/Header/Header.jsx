import './Header.styles.scss'

import { useSelector, useDispatch } from 'react-redux'
import { XSquare } from 'react-bootstrap-icons'
import { Form, InputGroup, Button } from 'react-bootstrap'
import { Search, BrightnessHigh, Moon } from 'react-bootstrap-icons'

import { actionsModeEdit } from '../../redux/actionsCreators/actionsModeEdit'
import { actionsThemEdit } from '../../redux/actionsCreators/actionsThem'


export default function Header() {

  const { mode } = useSelector((state) => state.modes)
  const { listInfo } = useSelector((state) => state.users)
  const { them } = useSelector((state) => state.them)
  const dispatch = useDispatch()

  return (
    <div className="header_form">
      <h4>
        {
          mode ? 'Добавление нового пользователя' : `Всего пользователей: ${listInfo.length}`
        }
      </h4>
      <div className="header_form__section">
        <button onClick={() => dispatch(actionsThemEdit.changeThem())}>
          {
            them ? <BrightnessHigh /> : <Moon />
          }
        </button>
        <InputGroup className="search_form__search">
          <Form.Control />
          <InputGroup.Text id="basic-addon2">
            <Search />
          </InputGroup.Text>
        </InputGroup>
        <div className="header_group__btn">
          {
            mode ? 
              (
                <>
                  <Button className="header_btn__primary" type="submit" form="example">Сохранить</Button>
                  <button className="header_btn__danger"><XSquare onClick={() => dispatch(actionsModeEdit.changeMode())}/></button>
                </>
              ) : (
                <Button className="header_btn__primary" onClick={() => dispatch(actionsModeEdit.changeMode())}>Добавить</Button>
              )
          }
        </div>
      </div>
    </div>
  )
}
