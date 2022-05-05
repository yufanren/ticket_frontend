import React from 'react'
import {Table} from 'react-bootstrap'

export const TicketTable = ({tickets}) => {
  return (
    <Table striped bordered hover>
        <thead>
            <tr>
                <th>#</th>
                <th>Subject</th>
                <th>Status</th>
                <th>Opened Date</th>
            </tr>
        </thead>
        <tbody>
            {tickets.length ? tickets.map(ticket => 
            <tr key={ticket.id}>
                <td>{ticket.id}</td>
                <td>{ticket.subject}</td>
                <td>{ticket.status}</td>
                <td>{ticket.addedAt}</td>               
            </tr>) :
            <tr>
                <td colSpan='4' className='text-center'>No Ticket Shown</td>       
            </tr>}                    
        </tbody> 
    </Table>
  )
}
