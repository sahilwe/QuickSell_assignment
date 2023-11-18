import React from 'react';
import Avatar from '../Avatar/Avatar';
import "./Card.css";

const Card = ({ticket}) => {
  // console.log("inside the card");
  // console.log(ticket);
  
  return (
    <article className='Card-container'>
      <div className='card-content'>
      <header className='top'>
        <h2>{ticket.id}</h2>
        <Avatar />
     
      </header>
      <div className='card-title'>

      <p>{ticket.title}</p>
      </div>

      <section className='bottom'>
        <div className='three-dots'>
          <p>...</p>
        </div>
        <div className='Feature-Request'>
          <div className='dot'></div>
          <p>{ticket.tag[0]}</p>
        </div>
      </section>
      </div>
    
    </article>
  );
}

export default Card;
