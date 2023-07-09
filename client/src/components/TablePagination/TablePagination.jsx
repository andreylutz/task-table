import React, { useEffect, useState } from 'react'
import { Form, Pagination } from 'react-bootstrap'
import { useSelector } from 'react-redux'

import './TablePagination.styles.scss'
import usePagination, { DOTS } from '../../hooks/usePagination'

const TablePagination = ({
  totalCount,
  changeItemsPerPage,
  pageSize,
  onPageChange,
  currentPage,
  siblingsCount = 1,
}) => {

  const { them } = useSelector((state) => state.them)
  const [totalPages, setTotalPages] = useState()

  useEffect(() => {
    setTotalPages(Math.ceil(totalCount / pageSize))
  }, [pageSize])

  const paginationRange = usePagination({ currentPage, totalCount, siblingsCount, pageSize })

  const handlePrevClick = () => {
    const changedPage = currentPage > 1 ? currentPage - 1 : currentPage
    onPageChange(changedPage)
  }

  const handleNextClick = () => {
    onPageChange(currentPage + 1)
  }

  const handleChangePageSize = (e) => {
    changeItemsPerPage(+e.target.value)
  }

  return (
    <div className={ them ? 'custom-table__pagination dark' : 'custom-table__pagination'}>
      <span className="select-box">
        <p>Отоброжать по:</p>
        <Form.Select
          className="select-perpage"
          defaultValue={pageSize}
          onChange={(e) => handleChangePageSize(e)}
        >
          <option value="1">1</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </Form.Select>
      </span>
      <Pagination>
        <Pagination.First onClick={() => onPageChange(1)} disabled={(totalCount <= pageSize)}/>
        <Pagination.Prev onClick={() => handlePrevClick()} disabled={currentPage === 1}/>
        {paginationRange.map((pageNumber, index) => {
          const current = index + 1

          if (pageNumber === DOTS) {
            return <Pagination.Item key={index}>&#8230;</Pagination.Item>
          }

          return <Pagination.Item
            key={index}
            active={currentPage === current}
            onClick={() => onPageChange(current)}
            disabled={(totalCount <= pageSize)}
          >
            {current}
          </Pagination.Item>
        })}
        <Pagination.Next onClick={() => handleNextClick()} disabled={currentPage === totalPages}/>
        <Pagination.Last onClick={() => onPageChange(totalPages)} disabled={(totalCount <= pageSize)}/>
      </Pagination>
    </div>
  )
}

export default TablePagination
