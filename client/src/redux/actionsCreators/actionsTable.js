export const SET_PAGINATION = 'SET_PAGINATION'

export const actionsTable = {
  paginationTable: (list) => ({
    type: SET_PAGINATION,
    payload: list,
  }),
}