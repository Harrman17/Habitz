import React from 'react'
import { faCalendarDays, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router'

function Header({ deleteHabits }) {
  return (
    <div className='flex justify-between items-center h-20 bg-main px-5'>
        <FontAwesomeIcon icon={faTrash} className='text-accent text-2xl mb-1 absolute' onClick={deleteHabits}/>
        <div className='text-accent font-extrabold italic text-3xl mx-auto'>Habitz</div>
        <NavLink to="/calendar">
          <FontAwesomeIcon icon={faCalendarDays} className='text-accent text-2xl mb-1 absolute right-6'/>
        </NavLink>
        
    </div>
  )
}

export default Header