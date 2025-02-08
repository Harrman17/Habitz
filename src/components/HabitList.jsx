import React from 'react'
import { faPlus, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




function HabitList({ currentDate, addHabit, addHabitBtn, habit, setHabit }) {

  return (
    <div className='bg-main text-accent min-h-screen flex flex-col items-center pt-10'>

      <div className='flex gap-1 items-center'>
        <h1 className='text-5xl border-b pb-1'>Today</h1>
        <h1 className='mt-6 border-b pb-1'>{currentDate}</h1>        
      </div>

      <div className='self-start ml-21 mt-8 flex gap-x-2'>
        <button className='bg-accent h-8 w-8 rounded-md' onClick={addHabit}>
          <FontAwesomeIcon icon={faX} className='text-main'/>
        </button>
        { addHabitBtn && <input className='bg-accent text-main rounded-sm pl-2 focus:outline-accent' placeholder='Habit name...' value={habit} onChange={(e) => setHabit(e.target.value)}></input>}
      </div>

    </div>
  )
}

export default HabitList