import { api } from '../../api/index'

export const getInfoUsers = () => {
  return async (dispatch) => {
    try {
      const infoUsers = await api.get('/api/users')

      console.log(infoUsers)
    } catch (e) {
      console.log(e.response.data)
    }
  }
}
