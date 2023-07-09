import './Spreadsheet.styles.scss'

import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Table } from 'react-bootstrap'
import { PencilFill, Save, Trash, XSquare } from 'react-bootstrap-icons'

import { actionsUsers } from '../../redux/actionsCreators/actionsUsers'
import { removeUser, upDataUser } from '../../redux/asyncActionsCreators/asyncActionUsers'
import FormAddNewUser from '../FormAddNewUser/FormAddNewUser'
import TablePagination from '../TablePagination/TablePagination'

export default function Spreadsheet({ headerTable }) {

  const { listInfo } = useSelector((state) => state.users)
  const { them } = useSelector((state) =>state.them)
  const dispatch = useDispatch()

  const [isEditMode, setIsEditMode] = useState(false)
  const [editedRow, setEditedRow] = useState()
  const [rowId, setRowId] = useState(undefined)

  const [pageSize, setPageSize] = useState(20)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    if (currentPage >= listInfo.length / pageSize)
      setCurrentPage(1)
  }, [pageSize])

  const firstPageIndex = (currentPage - 1) * pageSize
  const lastPageIndex = firstPageIndex + pageSize
  
  const paginateData = listInfo.slice(firstPageIndex, lastPageIndex)

  if (paginateData.length === 0) {
    return
  }

  //Преобразование формата даты
  listInfo.map((el) => el.register_date ? el.register_date = el.register_date.substring(0, 10) : el)

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

      const newData = listInfo.map(row => {
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
    <>
      <div className={ them ? 'table_box dark' : 'table_box' }>
        <Table  variant={ them ? 'dark' : '' } striped="columns" bordered hover>
          <thead>
            <tr>
              {
                headerTable.map((col) => <th className="head_table" key={col.id}>{ col.fieldName }</th>)
              }
              <th className="head_table">Действие</th>
            </tr>
          </thead>
          <tbody>
            <FormAddNewUser columns={headerTable} />
            {
              paginateData.map((row) => 
                <tr key={row.id}>
                  {
                    headerTable.map((col) => 
                      <td key={col.key}>
                        {
                          isEditMode && rowId === row.id ?
                            (
                              <Form.Control
                                type={col.type}
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
                          <button className="custom-table__action-btn btn_primary">
                            <Save onClick={() => handleSaveRowChanges()}/>
                          </button>
                        ) :
                        (
                          <button className="custom-table__action-btn btn_edit" onClick={() => handleEdit(row.id)}>
                            <PencilFill />
                          </button>
                        )
                    }
                    {' '}
                    {
                      isEditMode && rowId === row.id ? 
                        (
                          <button className="custom-table__action-btn btn_danger" onClick={() => handleCancelEditing()}>
                            <XSquare />
                          </button>
                        ) :
                        (
                          <button className="custom-table__action-btn btn_danger" onClick={() => handleRemoveRow(row.id)}>
                            <Trash />
                          </button>
                        )
                    }
                  </td>
                </tr>)
            }
          </tbody>
        </Table>
      </div>
      <TablePagination
        totalCount={listInfo.length}
        pageSize={pageSize}
        changeItemsPerPage={(page) => setPageSize(page)}
        onPageChange={(page) => setCurrentPage(page)}
        currentPage={currentPage}
      />
    </>
  )
}