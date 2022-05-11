import React from 'react'
import {Form, Row, Col} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {filterSearchTicket} from '../../page/ticket-listing/ticketsAction'

export const SearchForm = () => {
    const dispatch = useDispatch()

    const handleOnChange = e => {
        const {value} = e.target
        
        dispatch(filterSearchTicket(value))
    }
  return (
    <div>
        <Form>
            <Form.Group as= {Row}>
                <Form.Label column sm='2'>Search: </Form.Label>
                <Col sm='10'>
                    <Form.Control
                    name='searchStr'
                    onChange={handleOnChange}
                    placeholder='Search...'
                    />
                </Col>
            </Form.Group>
        </Form>
    </div>
  )
}

