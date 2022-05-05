import React from 'react'
import PropTypes from 'prop-types'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'

export const LoginForm = ({handleOnchange, username, password, handleOnSubmit, formSwitcher}) => {
  return (
    <Container>
        <Row>
            <Col>
                <h1>Admin Login</h1>
                <hr />
                <Form autoComplete='off'>
                    <Form.Group>
                        <Form.Label>User Name</Form.Label>
                        <Form.Control
                        type='text'
                        name='username'
                        value={username}
                        onChange = {handleOnchange}
                        placeholder='Enter User Name'
                        required
                        />
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                        type='password'
                        name='password'
                        value={password}
                        onChange = {handleOnchange}
                        placeholder='Enter Password'
                        required
                        />
                    </Form.Group>
                    <br></br>
                    <Button type='submit' onClick={handleOnSubmit}>Login</Button>
                </Form>
                <hr />
            </Col>
        </Row>
        <Row>
            <Col>
                <a href="#!" onClick={() => formSwitcher('reset')}>Forget Password?</a>
            </Col>
        </Row>
    </Container>
  )
}

LoginForm.propTypes = {
    handleOnchange: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired
}
