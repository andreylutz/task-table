import { useSelector, useDispatch } from 'react-redux'
import { XSquare } from 'react-bootstrap-icons'

import { actionsModeEdit } from '../../redux/actionsCreators/actionsModeEdit'


export default function Header() {

  const { mode } = useSelector((state) => state.modes)
  const dispatch = useDispatch()

  const fieldVisibilityKnob = () => {
    dispatch(actionsModeEdit.changeMode())
  }

  return (
    <div style={{ 
      height: '5rem', 
      display: 'flex', 
      alignItems: 'center',
      justifyContent: 'flex-end',
    }}>
      {
        mode ? 
          (
            <>
              <button type="submit" form="example">Сохранить</button>
              <button><XSquare onClick={fieldVisibilityKnob}/></button>
            </>
          ) : (
            <button onClick={fieldVisibilityKnob}>Добавить</button>
          )
      }
    </div>
  )
}
