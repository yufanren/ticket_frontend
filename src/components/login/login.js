import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {Container, Row, Col, Form, Button, Spinner, Alert} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import {loginPending, loginFail, loginSuccess} from './loginSlice'
import {getUserProfile} from '../../page/dashboard/userAction'
import {userLogin} from '../../api/userAPI'
export const LoginForm = ({formSwitcher}) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {isLoading, error, isAuth} = useSelector(state => state.login)

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
  
  
    const handleOnchange = e => {
      const {name, value} = e.target
      switch (name) {
        case 'username':
          setUsername(value)
          break
        case 'password':
          setPassword(value)
          break
        case 'email':
          setEmail(value)
          break
        default:
          break
      }
    }
  
    const handleOnSubmit = async e => {
      e.preventDefault();
      if ((!username || !password) && !email) {
        return alert("Please fill all required information!")
      }
      dispatch(loginPending())

      try {
          const isAuth = await userLogin({'name': username, password})

          if (isAuth.status === 'error') {
              return dispatch(loginFail(isAuth.message))
          }
          dispatch(loginSuccess())
          dispatch(getUserProfile())
          navigate('/dashboard')
      } catch (error) {
          dispatch(loginFail(error.message))
      }
    }

    return (
    <Container>
        <Row>
            <Col>
                <h1>Admin Login</h1>
                <hr />
                {error && <Alert variant='danger'>{error}</Alert>}
                <Form autoComplete='off' onSubmit={handleOnSubmit}>
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
                    {isLoading && <Spinner variant='primary' animation='border' />}
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
    formSwitcher: PropTypes.func.isRequired
}
