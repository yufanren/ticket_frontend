import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import {fetchAllTickets} from './ticketsAction'

import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BreadCrumb } from '../../components/breadcrumb/BreadCrumb'
import { SearchForm } from '../../components/search-form/SearchForm'
import { TicketTable } from '../../components/ticket-table/TicketTable'

export const TicketListing = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllTickets())
    }, [dispatch])

  return (
    <Container>
        <Row>
            <Col>
                <BreadCrumb page="Ticket Lists" />
            </Col>
        </Row>
        <Row className='mt-4'>
            <Col>
                <Link to='/add-ticket'>
                <Button variant='info'>Add New Ticket</Button>
                </Link>
            </Col>
            <Col className='text-right'>
                <SearchForm />
            </Col>
        </Row>
        <hr />
        <Row>
            <Col>
                <TicketTable />
            </Col>
        </Row>
    </Container>
  )
}
