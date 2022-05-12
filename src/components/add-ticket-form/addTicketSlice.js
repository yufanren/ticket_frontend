import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    isLoading: false,
    error: '',
    successMsg: ''
}

const newTicketSlice = createSlice({
    name: 'newTicket',
    initialState,
    reducers: {
        openNewTicketPending: (state) => {
            state.isLoading = true
        },
        openNewTicketSuccess: (state, {payload}) => {
            state.isLoading = false
            state.successMsg = payload
            state.error = ''
        },
        openNewTicketFail: (state, {payload}) => {
            state.isLoading = false
            state.error = payload
        },
    }
})

export default newTicketSlice.reducer

export const {
    openNewTicketPending,
    openNewTicketFail,
    openNewTicketSuccess
    } = newTicketSlice.actions