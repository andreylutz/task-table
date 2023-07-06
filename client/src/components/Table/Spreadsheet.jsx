import React, { useState } from 'react'
import { Form, Table } from 'react-bootstrap'

export default function Spreadsheet({ columns, dataTable }) {

  const [isEdit, setIsEdit] = useState(false)
  const [rowEdit, setRowEdit] = useState(undefined)
  const [rowsState, setRowsState] = useState(dataTable)
  const [editedRow, setEditedRow] = useState()
  
  const handleOnChangeField = (e, rowID) => {
    const { name: fieldName, value } = e.target
  
    setEditedRow({
      id: rowID,
      [fieldName]: value,
    })
  }
  
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {columns.map((column) => {
            return <th key={column.field}>{ column.fieldName }</th>
          })}
        </tr>
      </thead>
      <tbody>
        {rowsState.map((row) => {
          return <tr key={row.id}>
            <td>
              { isEdit && rowEdit === row.id
                ? <Form.Control
                  type="text"
                  defaultValue={editedRow ? editedRow.username : row.username}
                  id={row.id}
                  name="username"
                  onChange={ (e) => handleOnChangeField(e, row.id) }
                />
                : row.username
              }
            </td>
            <td>
              { isEdit && rowEdit === row.id
                ? <Form.Control
                  type="text"
                  defaultValue={editedRow ? editedRow.phone : row.phone}
                  id={row.id}
                  name="phone"
                  onChange={ (e) => handleOnChangeField(e, row.id) }
                />
                : `+7 ${row.phone}`
              }
            </td>
            <td>
              { isEdit && rowEdit === row.id
                ? <Form.Control
                  type="text"
                  defaultValue={editedRow ? editedRow.email : row.email}
                  id={row.id}
                  name="email"
                  onChange={ (e) => handleOnChangeField(e, row.id) }
                />
                : row.email
              }
            </td>
            <td>
              { isEdit && rowEdit === row.id
                ? <Form.Control
                  type="text"
                  defaultValue={editedRow ? editedRow.register_date : row.register_date}
                  id={row.id}
                  name="register_date"
                  onChange={ (e) => handleOnChangeField(e, row.id) }
                />
                : row.register_date
              }
            </td>
            <td>
              { isEdit && rowEdit === row.id
                ? <Form.Control
                  type="text"
                  defaultValue={editedRow ? editedRow.code : row.code}
                  id={row.id}
                  name="code"
                  onChange={ (e) => handleOnChangeField(e, row.id) }
                />
                : row.code
              }
            </td>
            <td>
              { isEdit && rowEdit === row.id
                ? <Form.Control
                  type="text"
                  defaultValue={editedRow ? editedRow.city : row.city}
                  id={row.id}
                  name="city"
                  onChange={ (e) => handleOnChangeField(e, row.id) }
                />
                : row.city
              }
            </td>
          </tr>
        })}
      </tbody>
    </Table>
  )
}
