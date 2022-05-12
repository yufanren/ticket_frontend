import { openNewTicketPending, openNewTicketFail, openNewTicketSuccess} from './addTicketSlice'
import {createNewTicket} from '../../api/ticketAPI'

export const openNewTicket = (formData) => (dispatch) => {
    return new Promise(async (resolve, reject) => {
        try {
            dispatch(openNewTicketPending())
            //call api
            const result = await createNewTicket(formData)
            if (result.status === 'error') {
                return dispatch(openNewTicketFail(result.message))
            }
            console.log(result.message)
            dispatch(openNewTicketSuccess(result.message))
        } catch (error) {
            // console.log(error)
            dispatch(openNewTicketFail(error.message))
        }
    })
} 