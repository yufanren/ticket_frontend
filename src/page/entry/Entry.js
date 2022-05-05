import React, {useState} from 'react'
import './style.css'
import {LoginForm} from '../../components/login/login'
import {ResetPasswordForm} from '../../components/login/password-reset'

export const Entry = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [formLoad, setFormLoad] = useState('login')

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
    console.log(name, value)
  }

  const handleOnSubmit = e => {
    e.preventDefault();
    if ((!username || !password) && !email) {
      return alert("Please fill all required information!")
    }

    //TODO submit form!
  }

  const handleOnResetSubmit = e => {
    e.preventDefault();
    if (!email) {
      return alert("Please fill out the email!")
    }

    //TODO submit form!
  }

  const formSwitcher = form => {
    setFormLoad(form)
  }

  return (
    <div className='entry-page bg-info'>
      <div className='jumbotron form-box'>
        {formLoad == 'login' && 
        <LoginForm handleOnchange={handleOnchange} 
          username={username}
          password={password}
          handleOnSubmit={handleOnSubmit}
          formSwitcher={formSwitcher}
        />}
        {formLoad == 'reset' &&         
        <ResetPasswordForm handleOnchange={handleOnchange} 
          email={email}
          handleOnResetSubmit={handleOnResetSubmit}
          formSwitcher={formSwitcher}
        />}

      </div>
    </div>
  )
}
