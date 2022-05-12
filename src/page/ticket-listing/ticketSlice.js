import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    tickets: [],
    isLoading: false,
    error: '',
    replyTicketError: '',
    searchTicketList: [],
    selectedTicket: {},
    replyMsg: ''
}

const ticketListSlice = createSlice({
    name: 'ticketList',
    initialState,
    reducers: {
        fetchTicketLoading: (state) => {
            state.isLoading = true
        },
        fetchTicketSuccess: (state, action) => {
            state.tickets = action.payload
            state.searchTicketList = action.payload
            state.isLoading = false
        },
        fetchTicketFail: (state, action) => {
            state.error = action.payload
            state.isLoading = false
        },
        searchTickets: (state, {payload}) => {

            state.searchTicketList = state.tickets.filter(row => {
                if (!payload) return row
                return row.subject.toLowerCase().includes(payload.toLowerCase())
            })
        },
        fetchSingleTicketLoading: (state) => {
            state.isLoading = true
        },
        fetchSingleTicketSuccess: (state, action) => {
            state.selectedTicket = action.payload
            state.isLoading = false
            state.error = ''
        },
        fetchSingleTicketFail: (state, action) => {
            state.error = action.payload
            state.isLoading = false
        },
        replyTicketLoading: (state) => {
            state.isLoading = true
        },
        replyTicketSuccess: (state, {payload}) => {
            state.replyMsg = payload
            state.isLoading = false
            state.error = ''
        },
        replyTicketFail: (state, action) => {
            state.replyTicketError = action.payload
            state.isLoading = false
        },
        closeTicketLoading: (state) => {
            state.isLoading = true
        },
        closeTicketSuccess: (state, {payload}) => {
            state.replyMsg = payload
            state.isLoading = false
            state.replyTicketError = ''
        },
        closeTicketFail: (state, action) => {
            state.error = action.payload
            state.isLoading = false
        },
    }
})

const {reducer, actions} = ticketListSlice

export const {fetchTicketLoading, 
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
            closeTicketSuccess} = actions

export default reducer