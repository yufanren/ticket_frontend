import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Container, Row, Col, Button, Spinner, Alert} from 'react-bootstrap'
import { BreadCrumb } from '../../components/breadcrumb/BreadCrumb'
import { Message } from '../../components/message/Message'
import { UpdateTicket } from '../../components/update-ticket/UpdateTicket'
import { useParams} from 'react-router-dom'

import {closeTicket, fetchSingleTicket} from '../ticket-listing/ticketsAction'
// const ticket = tickets[0]
export const Ticket = () => {
    const { isLoading, selectedTicket, replyMsg, replyTicketError, error} = useSelector(state => state.tickets)
    const dispatch = useDispatch()
    const {tid} = useParams()

    useEffect(() => {
       dispatch(fetchSingleTicket(tid)) 
    }, [tid, dispatch])

  return (
    <Container>
        <Row>
            <Col>
                {isLoading && <Spinner variant='primary' animation='border' />}
                {error && <Alert variant='danger'>{error}</Alert>}
                {replyTicketError && <Alert variant='danger'>{replyTicketError}</Alert>}
                {replyMsg && <Alert variant='success'>{replyMsg}</Alert>}
            </Col>
        </Row>
        <Row>
            <Col>
                <BreadCrumb page="Ticket"/>
            </Col>
        </Row>
        <Row>
            <Col className='text-weight-bolder text-secondary'>
                <div className='category'>Category: {selectedTicket.category}</div>
                <div className='subject'>Subject: {selectedTicket.subject}</div>
                <div className='date'>Date: {selectedTicket.openAt && new Date(selectedTicket.openAt).toLocaleString()}</div>
                <div className='status'>Status: {selectedTicket.status}</div>
                <div className='email'>Emial Address: {selectedTicket.email}</div>
            </Col>
            <Col>
                <Button variant='outline-info' 
                onClick={() => dispatch(closeTicket(tid))}
                disabled = {selectedTicket.status === 'Closed'}
                >
                    Close Ticket
                </Button>
            </Col>
        </Row>
        <Row className='mt-4'>
            <Col>
                {selectedTicket.conversations &&
                <Message message={selectedTicket.conversations}/>
                }
            </Col>
        </Row>
        <hr />
        <Row className='mt-4'>
            <Col>
                <UpdateTicket _id={tid}/>
            </Col>
        </Row>
    </Container>
  )
}
