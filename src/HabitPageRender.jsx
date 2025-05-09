import React from 'react'
import { useParams } from 'react-router'
import HabitList from './components/HabitList'


function HabitPageRender({ habit, setHabit, currentDate, openAddHabit, addHabitBtn, habitsObject, deleteHabit, setHabitID, setHabitsObject, habitID }) {

    const { date } = useParams()
    const formattedDate = date?.replace(/-/g, "/")
    const monthKey = formattedDate?.split("/").slice(1).join("/")
    const fullDate = formattedDate

    function addHabit() {

      if (!habit.trim()) {
        return
      }
  
  
    const newHabitID = habitID + 1;
    setHabitID(newHabitID)
    
      const habitObject = {
        ID: habitID,
        habit_name: habit,
        status: false
      }
  
  
      if (!habitsObject[monthKey]) {
        habitsObject[monthKey] = {}
      }
  
      if (!habitsObject[monthKey][fullDate]) {
        habitsObject[monthKey][fullDate] = []
      }
  
      // if theres no monthKey for the current month then we create one, same with the date key
  
      setHabitsObject(prev => {
        const updated = { ...prev }
  
        updated[monthKey] = {
          ...prev[monthKey] || {},
          [fullDate]: [...(prev[monthKey]?.[fullDate] || []), habitObject]
        }
      
        return updated
      })
    
      setHabit("")
    }

    function completeHabit(ID) { 
      setHabitsObject(prev => {
        const updated = { ...prev }
  
        updated[monthKey] = {
          ...prev[monthKey],
          [currentDate]: prev[monthKey][currentDate].map(habit => {
            return habit.ID === ID ? { ...habit, status: !habit.status } : habit
          })
        }
        return updated
      })
    }

    function removeHabit(ID) {
      if (deleteHabit) {
        setHabitsObject(prev => {
          const updated = { ...prev }
  
          updated[monthKey] = {
            ...prev[monthKey],
            [currentDate]: prev[monthKey][currentDate].filter(habit => habit.ID !== ID)
          }
  
          return updated
  
        })
      }
    }


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