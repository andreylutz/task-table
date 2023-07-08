import { useSelector, useDispatch } from 'react-redux'

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
      <button type="submit" form="example" onClick={fieldVisibilityKnob}>{ mode ? 'Сохранить' : 'Добавить' }</button>
    </div>
  )
}
