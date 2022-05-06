import React, {useState, useEffect} from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import { BreadCrumb } from '../../components/breadcrumb/BreadCrumb'
import { Message } from '../../components/message/Message'
import { UpdateTicket } from '../../components/update-ticket/UpdateTicket'
import tickets from '../../asset/data/dummy-ticket.json'
import { useParams} from 'react-router-dom'

// const ticket = tickets[0]
export const Ticket = () => {
    
    const {tid} = useParams()
    const [msg, setMsg] = useState('')
    const [ticket, setTicket] = useState('')

    const handleOnChange = e => {
        setMsg(e.target.value)
    }

    useEffect(() => {
        for (let i = 0; i < tickets.length; i++) {
            if (tickets[i].id == tid) {
                setTicket(tickets[i])
                break
            }
        }
    }, [msg, tid])

    const handleOnSubmit = () => {
    }
    
  return (
      ticket &&
    <Container>
        <Row>
            <Col>
                <BreadCrumb page="Ticket"/>
            </Col>
        </Row>
        <Row>
            <Col className='text-weight-bolder text-secondary'>
                <div className='subject'>Subject: {ticket.subject}</div>
                <div className='date'>Date: {ticket.addedAt}</div>
                <div className='status'>Status: {ticket.status}</div>
                <div className='email'>Emial Address: {ticket.email}</div>
            </Col>
            <Col>
                <Button variant='outline-info'>Replay Issue</Button>
            </Col>
        </Row>
        <Row className='mt-4'>
            <Col>
                {ticket.detail &&
                <Message message={ticket.detail}/>
                }
            </Col>
        </Row>
        <hr />
        <Row className='mt-4'>
            <Col>
                <UpdateTicket 
                msg={msg}
                handleOnChange={handleOnChange}
                handleOnSubmit={handleOnSubmit}
                />
            </Col>
        </Row>
    </Container>
  )
}
