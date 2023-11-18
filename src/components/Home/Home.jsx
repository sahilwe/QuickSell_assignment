import React from 'react'
// import Card from '../card/Card'
import Display_dropdown from '../Display_dropdown/Display_dropdown'
import List from '../Lists/List'
import'./Home.css'
import Ticket from '../Ticket/Ticket'
const Home = () => {
  return (
    <div className='Home-container'>
      <Display_dropdown/>/
      <div className='lists'>
      <Ticket/>
      <Ticket/>
      <Ticket/>
      <Ticket/>
      <Ticket/>
      </div>
     

    
    </div>
  )
}

export default Home