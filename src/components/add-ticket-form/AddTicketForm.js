import React, {useState, useEffect} from 'react'
import { Form, Button, Row, Col, Spinner, Alert } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
// import PropTypes from 'prop-types'
import './add-ticket-form.css'
import { shorText } from '../../util/validation'
import { openNewTicket } from './addTicketAction'

const initialFormData = {
    email:'',
    subject:'',
    category:'My Account',
    message:''
}

const initialFormError = {
    email:false,
    subject:false,
    category:false,
    message:false
}
export const AddTicketForm = () => {
    const dispatch = useDispatch()

    const {
        isLoading,
        error,
        successMsg
    } = useSelector(state => state.openTicket)

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
        console.log(formData)
        dispatch(openNewTicket(formData))
    }

  return (
    <div className='jumbotron add-ticket-form mt-3 bg-light'>
    <h1 className='text-info text-center'>Submit Issue</h1>
    <hr />
    <div>
        {error && <Alert variant = 'danger'>{error}</Alert>}
        {successMsg && <Alert variant='success'>{successMsg}</Alert>}
        {isLoading && <Spinner variant='primary' animation='border'/>}
    </div>
    <Form autoComplete='off' onSubmit={handleOnSubmit}>
        <Form.Group as={Row}>
            <Form.Label column sm={2}>Your Email:</Form.Label>
            <Col sm={10}>
            <Form.Control
            name='email'
            value={formData.email}
            onChange = {handleOnChange}
            placeholder='Email Adress'
            required
            />
            </Col>
        </Form.Group>
        <br></br>    
        <Form.Group  as={Row}>
            <Form.Label column sm={2}>Subject:</Form.Label>
            <Col sm={10}>
            <Form.Control
            name='subject'
            value={formData.subject}
            onChange = {handleOnChange}
            placeholder='Subject'
            required
            />
            <Form.Text className='text-danger'>
                {formError.subject && "Subject is required"}
            </Form.Text>
            </Col>
        </Form.Group>
        <br></br>
        <Form.Group as={Row} controlId='formBasicSelect'>
            <Form.Label column sm={2}>Category:</Form.Label>
            <Col sm={10}>
            <Form.Control
            as='select'
            name='category'
            value={formData.category}
            onChange = {handleOnChange}>
                <option value='ACCOUNT'>My Account</option>
                <option value='TRANSACTION'>Wallet and Transaction Issues</option>
                <option value='TRADE'>Buying and Selling NFTs</option>
                <option value='DEVELOPER'>Developer Help</option>
                <option value='ERROR'>Report Error Message</option>
                <option value='FRAUD'>Report Fraudulent Activity</option>
            </Form.Control>
            </Col>
        </Form.Group>
        <br></br>
        <Form.Group>
            <Form.Label>Issue Found:</Form.Label>
            <Form.Control
                as='textarea'
                name='message'
                rows='5'
                value={formData.message}
                onChange = {handleOnChange}
                required
                />
        </Form.Group>
        <br></br>
        <div className='d-grid gap-2'>        
            <Button type='submit' variant='info' block='true' size='lg'
        onClick={handleOnSubmit} style={{color: 'white', boxShadow: '5px 5px 15px -5px black'}}
        >Open Ticket</Button>
        </div>
    </Form>
    </div>
  )
}

