import React, { useEffect, useState } from 'react';
import List from '../Lists/List';
import Ticket from '../Ticket/Ticket';
import { useDispatch } from 'react-redux';

const ApiData = () => {
  const [ticketsData, setTicketsData] = useState([]);
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
// 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
        const result = await response.json();

        
        dispatch({
          type:"Ticket",
          payload: result
        })
        
        
        console.log(result);
        setTicketsData(result.tickets);
        // console.log(setTicketsData);
        setUsersData(result.users);
        // console.log(setUsersData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);



  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>    
          <Ticket/>
        </div>
      )}
    </div>
  );
};

export default ApiData;
