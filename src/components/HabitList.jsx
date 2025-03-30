import React from 'react'
import { faPlus, faX, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




function HabitList({ currentDate, openAddHabit, addHabitBtn, habit, setHabit, addHabit, completeHabit, deleteHabit, habitsObject, removeHabit}) {


  return (
    <div className='bg-main text-accent min-h-screen flex flex-col items-center pt-10'>

      <div className='flex gap-1 items-center'>
        <h1 className='text-5xl border-b pb-1'>Today</h1>
        <h1 className='mt-6 border-b pb-1'>{currentDate}</h1>        
      </div>


      <div className='self-start ml-21 mt-8 flex flex-col gap-x-2'>
        <div className='flex items-center'>
          <ul>
            {(habitsObject[currentDate] || []).map((map) => { // map == habit object
              return (
                  <li className='flex items-center gap-x-4 mb-3' key={map.get("ID")}>
                    <button className='bg-accent h-8 w-8 rounded-md group' onClick={() => {
                      if (deleteHabit) {
                        removeHabit(map.get("ID"))
                      } else {
                        completeHabit(map.get("ID"))
                      }
                    }}>
                      {deleteHabit ? 
                      (<FontAwesomeIcon icon={faX} className='text-test'/>)
                      : 
                      (<FontAwesomeIcon icon={faCheck} className={`text-main opacity-0 transition-opacity ${map.get("status") ? 'opacity-100' : 'group-hover:opacity-50'}`}/>) }
                    </button>
                    <span className={`font-semibold ${map.get("status") ? 'line-through' : ''}`}>{map.get("habit_name")}</span>
                  </li>
              )
            })
            }
          </ul>
        </div>
        <div className='flex items-center gap-x-2'>
          <button className='bg-accent h-8 w-8 rounded-md' onClick={openAddHabit}>
            { habit && <FontAwesomeIcon icon={faX} className='text-main'/> || <FontAwesomeIcon icon={faPlus} className='text-main'/>}
          </button>
          { addHabitBtn &&
            <input 
            className='bg-accent text-main rounded-sm pl-2 focus:outline-accent h-8 w-46' 
            placeholder='Habit name...' 
            value={habit} onChange={(e) => setHabit(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && habit) {
                addHabit()
              }
            }}
            required 
            />
          }
        </div>
        { addHabitBtn && 
        <button onClick={addHabit} className={`${habit ? 'bg-accent' : 'bg-gray-300 opacity-30 cursor-not-allowed'} w-30 h-7 text-main text-sm rounded-sm self-end mt-3`}>Add Habit</button>
        }
      </div>
    </div>
  )
}

export default HabitList