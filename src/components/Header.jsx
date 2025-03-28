import React from 'react'
import { faCalendarDays, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router'

function Header({ deleteHabitsToggle, showIcons }) {

  return (
    <div className='flex justify-between items-center h-20 bg-main px-5'>
      {showIcons && <FontAwesomeIcon icon={faTrash} className='text-accent text-2xl left-6 mb-1' onClick={deleteHabitsToggle}/>}
      <div className='text-accent font-extrabold italic text-3xl flex-1 text-center mr-6'>Habitz</div>
      <NavLink to="/calendar" className="absolute right-6">
        {showIcons && <FontAwesomeIcon icon={faCalendarDays} className='text-accent text-2xl mb-1'/>}
      </NavLink>
    </div>
  )
}

export default Header