import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Container, Row, Col, Button } from 'react-bootstrap'
import { TicketTable } from '../../components/ticket-table/TicketTable'
import tickets from '../../asset/data/dummy-ticket.json'
import {BreadCrumb} from '../../components/breadcrumb/BreadCrumb'
import {Link} from 'react-router-dom'
import {fetchAllTickets} from '../ticket-listing/ticketsAction'

export const Dashboard = () => {

  const {tickets} = useSelector(state => state.tickets)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!tickets.length) {
      dispatch(fetchAllTickets())
    }
  }, [tickets, dispatch])

  const pendingTickets = tickets.filter(row => row.status !== 'Closed')
  const totalTickets = tickets.length
  return (
    <Container>
      <Row>
        <Col>
          <BreadCrumb page="Dashboard" />
        </Col>
      </Row>
        <Row>
            <Col className='text-center mt-5 mb-3' size='sm'>
              <Link to='/add-ticket'>
                <Button variant='info' style={{fontSize: '1.5rem', 
                'padding':"10px 30px", 'color':'white', boxShadow:'5px 5px 15px -5px black'}}>
                Add New Ticket</Button>
                </Link>
            </Col>
        </Row>
        <Row>
          <Col className='text-center mb-2'>
            <div>Total tickets: {totalTickets}</div>
            <div>Pending ticket: {pendingTickets.length}</div>
          </Col>
        </Row>
        <Row>
          <Col className='mt-2'>
            Recently added tickets
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className='recent-ticket'>
            <TicketTable tickets={tickets}/>
          </Col>
        </Row>
    </Container>
  )
}
