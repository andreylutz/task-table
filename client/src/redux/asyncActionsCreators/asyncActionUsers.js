import { api } from '../../api/index'
import { actionsUsers } from '../actionsCreators/actionsUsers'

export const getInfoUsers = () => {
  return async (dispatch) => {
    try {
      const infoUsers = await api.get('/api/users')

      dispatch(actionsUsers.setUserInfo(infoUsers.data))
    } catch (e) {
      alert(e.response.data)
    }
  }
}

export const addUserPost = (data) => {
  return async (dispatch) => {
    try {
      const response = await api.post('/api/users/add', {
        data,
      })

      dispatch(actionsUsers.addUser(response.data))
    } catch (e) {
      alert(e.response.data.detail)
    }
  }
}

export const removeUser = (userId) => {
  return async (dispatch) => {
    try {
      await api.delete(`/api/users/${userId}`)

      dispatch(actionsUsers.removeUser(userId))
    } catch (e) {
      alert(e.response.data.detail)
    }
  }
}

export const upDataUser = (userId, data) => {
  return async (dispatch) => {
    try {
      await api.put(`/api/users/${userId}`, {
        data,
      })

    } catch (e) {
      alert(e.response.data.detail)
    }
  }
}