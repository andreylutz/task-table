export const SET_USERS = 'SET_USERS'
export const ADD_USER = 'ADD_USER'
export const REMOVE_USER = 'REMOVE_USER'

export const actionsUsers = {
  setUserInfo: (userInfo) => ({
    type: SET_USERS,
    payload: userInfo,
  }),
  addUser: (event) => ({
    type: ADD_USER,
    payload: event,
  }),
  removeUser: (idUser) => ({
    type: REMOVE_USER,
    payload: idUser,
  }),
}
