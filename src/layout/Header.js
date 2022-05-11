import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import logo from '../asset/img/logo.png'
import { useNavigate } from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
import {userLogout} from '../api/userAPI'

export const Header = () => {
  const navigate = useNavigate()

  const logMeOut = () => {
    userLogout()
    sessionStorage.removeItem('accessJWT')
    localStorage.removeItem('crmSite')
    navigate('/')
  }

  return (
    <Navbar collapseOnSelect bg='info' 
    variant='dark' expand='md' fixed='top'>
        <Navbar.Brand>
            <img src={logo} alt='logo' width='60px' height='55px' className='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <LinkContainer to='/dashboard'>
                <Nav.Link>Dashboard</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/tickets'>
                <Nav.Link>Tickets</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/'>
                <Nav.Link onClick={logMeOut}>Logout</Nav.Link>
              </LinkContainer>      
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}
