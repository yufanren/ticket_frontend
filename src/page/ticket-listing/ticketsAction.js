import axios from 'axios'
import {fetchTicketLoading, fetchTicketSuccess, fetchTicketFail, searchTickets} from './ticketSlice'
import {getAllTickets} from '../../api/ticketAPI'

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



