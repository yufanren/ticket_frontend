import React, {useState} from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import PropTypes from 'prop-types'
import './add-ticket-form.css'


export const AddTicketForm = ({handleOnSubmit, handleOnChange, formData, formError}) => {
    
    console.log(formData)
  return (
    <div className='jumbotron add-ticket-form mt-3 bg-light'>
    <h1 className='text-info text-center'>Submit Issue</h1>
    <hr />
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
                name='detail'
                rows='5'
                value={formData.detail}
                onChange = {handleOnChange}
                required
                />
        </Form.Group>
        <br></br>
        <div className='d-grid gap-2'>        
            <Button type='submit' variant='info' block='true' size='lg'
        onClick={handleOnSubmit} style={{color: 'white', boxShadow: '5px 5px 15px -5px black'}}
        >Submit</Button>
        </div>
    </Form>
    </div>
  )
}

AddTicketForm.propTypes = {
    handleOnSubmit: PropTypes.func.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    formData: PropTypes.object.isRequired,
}


