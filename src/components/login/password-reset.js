import React from 'react'
import PropTypes from 'prop-types'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'

export const ResetPasswordForm = ({handleOnchange, email, handleOnResetSubmit, formSwitcher}) => {
  return (
    <Container>
        <Row>
            <Col>
                <h1>Reset Password</h1>
                <hr />
                <Form autoComplete='off'>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                        type='text'
                        name='email'
                        value={email}
                        onChange = {handleOnchange}
                        placeholder='Enter Email'
                        required
                        />
                    </Form.Group>
                    <br></br>
                    <Button type='submit' onClick={handleOnResetSubmit}>Reset</Button>
                </Form>
                <hr />
            </Col>
        </Row>
        <Row>
            <Col>
                <a href="#!" onClick={() => formSwitcher('login')}>Log in now?</a>
            </Col>
        </Row>
    </Container>
  )
}

ResetPasswordForm.propTypes = {
    handleOnchange: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired
}
