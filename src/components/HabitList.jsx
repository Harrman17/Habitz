import React from 'react'

function HabitList({ habits, currentDate }) {
  return (
    <div className='bg-main text-accent h-screen'>
      <div className='flex gap-1 justify-center pt-12'>
        <h1 className='text-5xl border-b-1 pb-1'>Today</h1>
        <h1 className='mt-6 border-b-1 pb-1'>{currentDate}</h1>        
      </div>
      <div className='bg-test flex justify-center'>
        <ul>
          <li>
            <input type='checkbox'></input>
            test
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HabitList