import React from 'react'
import { Form, Table } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid'
import './Spreadsheet.styles.scss'

export default function Spreadsheet({ headerTable ,bodyTable }) {
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
                <Form.Control
                  type={col.type}
                />
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