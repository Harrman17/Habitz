import React from 'react'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header({ deleteHabits }) {
  return (
    <div className='flex justify-between items-center h-20 bg-main px-5'>
        <FontAwesomeIcon icon={faTrash} className='text-accent text-2xl mb-1' onClick={deleteHabits}/>
        <div className='text-accent font-extrabold italic text-3xl mx-auto'>Habitz</div>
    </div>
  )
}

export default Header