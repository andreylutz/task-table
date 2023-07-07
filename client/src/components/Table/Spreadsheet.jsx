import { useDispatch } from 'react-redux'
import { Form, Table } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'
import './Spreadsheet.styles.scss'

import { actionsUsers } from '../../redux/actionsCreators/actionsUsers'
import { addUser } from '../../redux/asyncActionsCreators/asyncActionUsers'

export default function Spreadsheet({ headerTable ,bodyTable }) {

  const dispatch = useDispatch()

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
  })

  // Добавление новой записи
  const handleAddRow = (data) => {
   
    dispatch(addUser(data))
    dispatch(actionsUsers.addUser(data))
  }

  return (
    <Table>
      <thead>
        <tr>
          {
            headerTable.map((col) => <th key={uuidv4()}>{ col.fieldName }</th>)
          }
        </tr>
      </thead>
      <tbody>
        <tr className="vis_form_on">
          {
            headerTable.map((col) => 
              <td key={uuidv4()}>
                <form onSubmit={handleSubmit(handleAddRow)}>
                  <Form.Control
                    type={col.type}
                    {...register(`${col.field}`, {
                      required: 'Поле обязательно к заполнению.',
                    })}
                  />
                  <button type="submit">Click</button>
                </form>
              </td>)
          }
        </tr>
        {
          bodyTable.map((row) => 
            <tr key={uuidv4()}>
              {
                headerTable.map((col) => 
                  <td key={uuidv4()}>
                    {/* <Form.Control
                      type="text"
                      defaultValue={row[col.field]}
                      id={row.id}
                      name={col.field}
                    /> */}
                    {
                      row[col.field]
                    }
                  </td>)
              }
            </tr>)
        }
      </tbody>
    </Table>
  )
}