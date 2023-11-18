import React from 'react';
import Card from '../card/Card';
import { useSelector } from 'react-redux';
import './Ticket.css';

const Ticket = () => {
  const ticketData = useSelector((state) => state.apiReducers);
  const tkt = ticketData?.tickets;

  // Get unique status values from the ticket data
  const uniqueStatusValues = [...new Set(tkt.map((ticket) => ticket.status))];

  // Create an object to store tickets for each status
  const statusTickets = {};
  uniqueStatusValues.forEach((status) => {
    statusTickets[status] = tkt.filter((ticket) => ticket.status === status);
  });

  return (
    <div className='content-container'>
      <div className='status-container'>
        {uniqueStatusValues.map((status) => (
          <div className='before-todo'>
            <div className='icon-text'>
              <div className='upper'>
                <div className='title'>
                  <div className='icon'></div>
                  <p>{status}</p>
                  <span>{statusTickets[status].length}</span>
                </div>
                <div className='extra-buttons'>
                  <span className='plus-icon'>+</span>
                  <span className='ellipsis-icon'>...</span>
                </div>
              </div>
              <div className='cards'>
                {statusTickets[status].map((ticket) => (
                  <Card key={ticket.id} ticket={ticket} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticket;
