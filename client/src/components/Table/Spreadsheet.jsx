import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Form, Table } from 'react-bootstrap'
import { PencilFill, Save, Trash, XSquare } from 'react-bootstrap-icons'
import './Spreadsheet.styles.scss'

import { actionsUsers } from '../../redux/actionsCreators/actionsUsers'
import { removeUser, upDataUser } from '../../redux/asyncActionsCreators/asyncActionUsers'
import FormAddNewUser from '../FormAddNewUser/FormAddNewUser'

export default function Spreadsheet({ headerTable ,bodyTable }) {

  const [isEditMode, setIsEditMode] = useState(false)
  const [editedRow, setEditedRow] = useState()
  const [rowId, setRowId] = useState(undefined)

  const dispatch = useDispatch()

  // Открытия поля редактировние записи
  const handleEdit = (id) => {
    setIsEditMode(true)
    setEditedRow(undefined)
    setRowId(id)
  }

  // Закрытие поля редактирования записи
  const handleCancelEditing = () => {
    setIsEditMode(false)
    setEditedRow(undefined)
  }

  // Редактирования записи
  const handleOnChangeField = (e, rowId) => {
    const { name: fieldName, value } = e.target

    setEditedRow({
      id: rowId,
      [fieldName]: value,
    })
  }

  // Сохранение редактироваемой записи
  const handleSaveRowChanges = () => {
    setTimeout(() => {
      setIsEditMode(false)

      const newData = bodyTable.map(row => {
        if (row.id === editedRow.id) {
          if (editedRow.username) row.username = editedRow.username
          if (editedRow.phone) row.phone = editedRow.phone
          if (editedRow.email) row.email = editedRow.email
          if (editedRow.register_date) row.register_date = editedRow.register_date
          if (editedRow.code) row.code = editedRow.code
          if (editedRow.city) row.city = editedRow.city
        }

        return row
      })

      const upData = newData.filter((el) => el.id === editedRow.id)

      dispatch(actionsUsers.updateUser(newData))
      dispatch(upDataUser(editedRow.id, ...upData))

      setEditedRow(undefined)
    }, 1000)
  }

  // Удаление записи
  const handleRemoveRow = (rowID) => {
    dispatch(removeUser(rowID))

    dispatch(actionsUsers.removeUser(rowID))
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {
            headerTable.map((col) => <th key={col.id}>{ col.fieldName }</th>)
          }
        </tr>
      </thead>
      <tbody>
        <FormAddNewUser columns={headerTable} />
        {
          bodyTable.map((row) => 
            <tr key={row.id}>
              {
                headerTable.map((col) => 
                  <td key={col.key}>
                    {
                      isEditMode && rowId === row.id ?
                        (
                          <Form.Control
                            type={row.type}
                            defaultValue={editedRow && editedRow[col.field] ? editedRow[col.field] : row[col.field]}
                            id={row.id}
                            name={col.field}
                            onChange={(e) => handleOnChangeField(e, row.id)}
                          />
                        ) : (
                          row[col.field]
                        )
                    }
                  </td>)
              }
              <td>
                {
                  isEditMode && rowId === row.id ? 
                    (
                      <button onClick={() => handleSaveRowChanges()}>
                        <Save />
                      </button>
                    ) :
                    (
                      <button onClick={() => handleEdit(row.id)}>
                        <PencilFill />
                      </button>
                    )
                }
                {' '}
                {
                  isEditMode && rowId === row.id ? 
                    (
                      <button onClick={() => handleCancelEditing()}>
                        <XSquare />
                      </button>
                    ) :
                    (
                      <button onClick={() => handleRemoveRow(row.id)}>
                        <Trash />
                      </button>
                    )
                }
              </td>
            </tr>)
        }
      </tbody>
    </Table>
  )
}