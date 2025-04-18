import React from 'react'
import { useParams } from 'react-router'
import HabitList from './components/HabitList'


function HabitPageRender({ habit, setHabit, currentDate, openAddHabit, addHabit, addHabitBtn, habitsObject, completeHabit, deleteHabit, removeHabit, monthKey }) {

    const { date } = useParams()
    const formattedDate = date.replace(/-/g, "/") // changing it back to the original date for use within the obj

    const [day, month, year] = formattedDate.split("/")
    monthKey = `${month}/${year}`

  return (
    <HabitList 
    habit={habit} 
    setHabit={setHabit} 
    currentDate={currentDate} 
    openAddHabit={openAddHabit} 
    addHabitBtn={addHabitBtn} 
    addHabit={addHabit} 
    habitsObject={habitsObject} 
    completeHabit={completeHabit}
    deleteHabit={deleteHabit}
    removeHabit={removeHabit}
    monthKey={monthKey}
    formattedDate={formattedDate}
    />
  )
}

export default HabitPageRender