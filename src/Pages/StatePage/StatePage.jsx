import React from 'react'
import Display_dropdown from '../../components/Display_dropdown/Display_dropdown'
import List from '../../components/Lists/List'
import Ticket from '../../components/Ticket/Ticket'
const StatePage = () => {
  return (
    <div className='Home-container'>
      <Display_dropdown/>
      <p>this is statePage</p>
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

export default StatePage