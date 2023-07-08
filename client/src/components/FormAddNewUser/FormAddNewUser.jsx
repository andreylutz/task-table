import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { Form } from 'react-bootstrap'

import { addUserPost } from '../../redux/asyncActionsCreators/asyncActionUsers'
import { actionsModeEdit } from '../../redux/actionsCreators/actionsModeEdit'

export default function FormAddNewUser({ columns }) {

  const { mode } = useSelector((state) => state.modes)
  const dispatch = useDispatch()

  // Добавление новой записи
  const handleAddRow = (data) => {
   
    dispatch(addUserPost(data))
    dispatch(actionsModeEdit.changeMode())
  }

  const {
    register,
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
  })

  return (
    <tr className={ mode ? 'vis_form_on' : 'vis_form_off' }>
      {
        columns.map((col) => 
          <td key={col.field}>
            <form id="example" onSubmit={handleSubmit(handleAddRow)}>
              <Form.Control
                type={col.type}
                {...register(`${col.field}`, {
                  required: 'Поле обязательно к заполнению.',
                })}
              />
            </form>
          </td>)
      }
    </tr>
  )
}
