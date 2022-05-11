import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { loginSuccess } from '../components/login/loginSlice'

import {Footer} from './Footer'
import {Header} from './Header'
import {Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard } from '../page/dashboard/Dashboard';
import { NewTicket } from '../page/new-ticket/NewTicket';
import { TicketListing } from '../page/ticket-listing/TicketListing';
import { Ticket } from '../page/ticket/Ticket';
import { fetchNewAccessJWT } from '../api/userAPI';


export const DefaultLayout = () => {

  const dispatch = useDispatch()
  const {isAuth} = useSelector(state => state.login)

  useEffect(() => {
    const updateAccessJWT = async () => {
      const result = fetchNewAccessJWT()
      if (result) {
        dispatch(loginSuccess)
      }
    }

  }, [isAuth])

  return (
    isAuth ? 
    <div className='default-layout'>
      <header className='header'>
        <Header />   
      </header>
      <main className='main mt-5'>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/add-ticket' element={<NewTicket />} />
          <Route path='/tickets' element={<TicketListing />} />
          <Route path='/ticket/:tid' element={<Ticket />} />
        </Routes>  
      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
    : <Navigate to='/' />
  )
}
