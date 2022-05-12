import React from 'react'
import { AddTicketForm } from '../../components/add-ticket-form/AddTicketForm'
import { BreadCrumb } from '../../components/breadcrumb/BreadCrumb'
import {Container, Row, Col} from 'react-bootstrap'

export const NewTicket = () => {


  return (
    <Container>
        <Row>
            <Col>
                <BreadCrumb page='New Ticket' />
            </Col>
        </Row>
        <Row>
            <Col>
                <AddTicketForm />
            </Col>
        </Row>
    </Container>
  )
}
