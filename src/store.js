import { configureStore } from "@reduxjs/toolkit";

import ticketsReducer from './page/ticket-listing/ticketSlice'

const store = configureStore({
    reducer: {
        tickets: ticketsReducer
    },
})

export default store