import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Form, Button, Alert} from 'react-bootstrap'
import { replyOnTicket } from '../../page/ticket-listing/ticketsAction'
import PropTypes from 'prop-types'

export const UpdateTicket = ({_id}) => {

  const {replyMsg} = useSelector(state => state.tickets)
  const dispatch = useDispatch()
  const { user:{name} } = useSelector(state => state.user)
  const [msg, setMsg] = useState('')

  const handleOnChange = e => {
      setMsg(e.target.value)
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    const msgObj = {
      message: msg
    }
    dispatch(replyOnTicket(_id, msgObj))
    setMsg('')
  }

  return (
    <Form onSubmit={handleOnSubmit}>
        <Form.Label>Replay</Form.Label>
        <br></br>
        <Form.Text>Please reply your messsage here.</Form.Text>
        <Form.Control
        as='textarea'
        row='7'
        name='detail'
        value={msg}
        onChange={handleOnChange}
        />
        <div className='text-end mt-3 mb-3'>
            <Button variant='info' type='submit'>
                Reply
            </Button>           
        </div>
    </Form>
  )
}

UpdateTicket.propTypes = {
  _id: PropTypes.string.isRequired,
}