import React from 'react'
import PropTypes from 'prop-types'
import './message.css'

export const Message = ({message}) => {
    if(!message) return null

  return message.map((row, i) => (
    <div className='message-history mt-5' key={i}>
        <div className='send font-weight-bold text-secondary mt-3'>
            <div className='sender'>Sender: {row.messageBy}</div>
            <div className='date'>Date: {row.date}</div>
        </div>
        <div className='message'>{row.message}</div>
    </div>
  ))
}

Message.propTypes = {
    message: PropTypes.array.isRequired
}
