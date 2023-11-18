import React from 'react'
import Display_dropdown from '../../components/Display_dropdown/Display_dropdown'
import List from '../../components/Lists/List'

const PriorityPage = () => {
  return (
    <div className='Home-container'>
    <Display_dropdown/>
    <p> this is PriorityPage</p>
    <div className='lists'>
    <List/>
    <List/>
    <List/>
    <List/>
    </div>
   

  
  </div>
  )
}

export default PriorityPage