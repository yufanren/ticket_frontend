import {getUserFail, getUserPending, getUserSuccess} from './userSlice'
import {fetchUser} from '../../api/userAPI'

export const getUserProfile = () => async dispatch => {
    try {
        dispatch(getUserPending())

        const result = await fetchUser()
        console.log(result)

        if (result.user && result.user._id) {
            return dispatch(getUserSuccess(result.user))
        }
        dispatch(getUserFail('User not found!'))
    } catch (error) {
        dispatch(getUserFail(error))
    }
}