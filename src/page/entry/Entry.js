import React, {useState} from 'react'
import './style.css'
import {LoginForm} from '../../components/login/login'
import {ResetPasswordForm} from '../../components/login/password-reset'

export const Entry = () => {
  const [formLoad, setFormLoad] = useState('login')

  const handleOnResetSubmit = e => {
    e.preventDefault();
  }

  const formSwitcher = form => {
    setFormLoad(form)
  }

  return (

    <div className='entry-page bg-info'>
      <div className='jumbotron form-box'>
        {formLoad == 'login' && 
        <LoginForm
          formSwitcher={formSwitcher}
        />}
        {formLoad == 'reset' &&         
        <ResetPasswordForm 
          // handleOnchange={handleOnchange} 
          // email={email}
          handleOnResetSubmit={handleOnResetSubmit}
          formSwitcher={formSwitcher}
        />}

      </div>
    </div>
  )
}
