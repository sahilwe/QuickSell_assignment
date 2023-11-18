import React from 'react';
import './List.css';
import Card from '../card/Card';
import Ticket from '../Ticket/Ticket';

const List = (props) => {

  const {data} = props;
  console.log( data);

  return (
    <div>
      this is the list 
      <Ticket/>
    </div>
  );
};

export default List;
