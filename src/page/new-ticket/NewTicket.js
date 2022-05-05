import React, {useState, useEffect} from 'react'
import { AddTicketForm } from '../../components/add-ticket-form/AddTicketForm'
import { BreadCrumb } from '../../components/breadcrumb/BreadCrumb'
import {Container, Row, Col} from 'react-bootstrap'
import { shorText } from '../../util/validation'

const initialFormData = {
    email:'',
    subject:'',
    category:'My Account',
    detail:''
}

const initialFormError = {
    email:false,
    subject:false,
    category:false,
    detail:false
}
export const NewTicket = () => {
    const [formData, setformData] = useState(initialFormData)
    const [formError, setFormError] = useState(initialFormError)

    useEffect(() => {},[formData, formError])

    const handleOnChange = e => {
        const {name, value} = e.target
        let p1 = {...formData}
        p1[name] = value
        setformData(p1)
    }

    const handleOnSubmit = e => {
        e.preventDefault()
        setFormError(initialFormError)
        const isValid = shorText(formData.subject)
        let p1 = {...formError}
        p1['subject'] = !isValid
        setFormError(p1)
    }

  return (
    <Container>
        <Row>
            <Col>
                <BreadCrumb page='New Ticket' />

            </Col>
        </Row>
        <Row>
            <Col>
                <AddTicketForm 
                    handleOnChange={handleOnChange}
                    formData={formData}
                    handleOnSubmit={handleOnSubmit}
                    formError = {formError}
                />
            </Col>
        </Row>
    </Container>
  )
}
