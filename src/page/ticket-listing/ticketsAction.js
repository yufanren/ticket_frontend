import {fetchTicketLoading, 
        fetchTicketSuccess, 
        fetchTicketFail, 
        searchTickets,
        fetchSingleTicketLoading,
        fetchSingleTicketSuccess,
        fetchSingleTicketFail,
        replyTicketFail,
        replyTicketLoading,
        replyTicketSuccess,
        closeTicketLoading,
        closeTicketFail,
        closeTicketSuccess} from './ticketSlice'
import {getAllTickets, getSingleTicket, updateReplyTicket, updateTicketStatusClosed} from '../../api/ticketAPI'

export const fetchAllTickets = () => async dispatch => {
    dispatch(fetchTicketLoading())
    try {
        //fetch data from api
        const result = await getAllTickets()
        dispatch(fetchTicketSuccess(result.data.result))
    } catch (error) {
        dispatch(fetchTicketFail(error.message))
    }
}

export const filterSearchTicket = str => dispatch => {
    dispatch(searchTickets(str))
}

//Actions for single ticket fetch
export const fetchSingleTicket = (_id) => async (dispatch) => {
    dispatch(fetchSingleTicketLoading())
    try {
        //fetch data from api
        const result = await getSingleTicket(_id)
        dispatch(fetchSingleTicketSuccess(result.data.result.length && result.data.result[0]))
    } catch (error) {
        dispatch(fetchSingleTicketFail(error.message))
    }
}

//Reply on ticket
export const replyOnTicket = (_id, msgObj) => async (dispatch) => {
    dispatch(replyTicketLoading())
    try {
        //fetch data from api
        const result = await updateReplyTicket(_id, msgObj)
        console.log(result)
        if (result.status === 'error') {
            return dispatch(replyTicketFail())
        }
        dispatch(fetchSingleTicket(_id))
        dispatch(replyTicketSuccess(result.message))
    } catch (error) {
        console.log(error.message)
        dispatch(replyTicketFail(error.message))
    }
}

//updateTicketStatusClosed

export const closeTicket = (_id) => async (dispatch) => {
    dispatch(closeTicketLoading())
    try {
        //fetch data from api
        const result = await updateTicketStatusClosed(_id)
        console.log(result)
        if (result.status === 'error') {
            return dispatch(closeTicketFail())
        }
        dispatch(fetchSingleTicket(_id))
        dispatch(replyTicketSuccess(result.message))
    } catch (error) {
        console.log(error.message)
        dispatch(closeTicketFail(error.message))
    }
}