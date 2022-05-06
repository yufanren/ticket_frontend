import React, {useState, useEffect} from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { BreadCrumb } from '../../components/breadcrumb/BreadCrumb'
import { SearchForm } from '../../components/search-form/SearchForm'
import { TicketTable } from '../../components/ticket-table/TicketTable'
import tickets from '../../asset/data/dummy-ticket.json'

export const TicketListing = () => {
    const [str, setStr] = useState('')
    const [displayTics, setDisplayTics] = useState(tickets)

    const handleOnChange = e => {
        const value = e.target.value
        setStr(value)
        searchTicket(value)
    }

    useEffect(() => {
    }, [str, displayTics])

    const searchTicket = str => {
        const displayTickets = tickets.filter(row => row.subject.toLowerCase().includes(str.toLowerCase()))
        setDisplayTics(displayTickets)
    }

  return (
    <Container>
        <Row>
            <Col>
                <BreadCrumb page="Ticket Lists" />
            </Col>
        </Row>
        <Row className='mt-4'>
            <Col>
                <Button variant='info'>Add New Ticket</Button>
            </Col>
            <Col className='text-right'>
                <SearchForm
                handleOnChange={handleOnChange}
                str={str}
                />
            </Col>
        </Row>
        <hr />
        <Row>
            <Col>
                <TicketTable tickets={displayTics}/>
            </Col>
        </Row>
    </Container>
  )
}
