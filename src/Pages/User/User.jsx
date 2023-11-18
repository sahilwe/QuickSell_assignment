import React from 'react'
import Display_dropdown from '../../components/Display_dropdown/Display_dropdown'
import List from '../../components/Lists/List'

const User = () => {
  return (
    <div>
        <Display_dropdown/>
        <p>
            this is the user page
            
        </p>
        <div className='lists'>
            <List/>
            <List/>
            <List/>
            <List/>
        </div>
    </div>
  )
}

export default User