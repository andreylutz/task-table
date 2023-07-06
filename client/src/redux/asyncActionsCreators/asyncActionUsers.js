import { api } from '../../api/index'
import { actionsUsers } from '../actionsCreators/actionsUsers'

export const getInfoUsers = () => {
  return async (dispatch) => {
    try {
      const infoUsers = await api.get('/api/users')

      dispatch(actionsUsers.setUserInfo(infoUsers.data))
    } catch (e) {
      console.log(e.response.data)
    }
  }
}
