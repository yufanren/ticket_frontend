import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import logo from '../asset/img/logo.png'

export const Header = () => {
  return (
    <Navbar collapseOnSelect bg='info' 
    variant='dark' expand='md'>
        <Navbar.Brand>
            <img src={logo} alt='logo' width='60px' height='55px' className='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
                <Nav.Link href='/dashboard'>Dashboard</Nav.Link>
                <Nav.Link href='/dashboard'>Tickets</Nav.Link>
                <Nav.Link href='/dashboard'>Logout</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}
