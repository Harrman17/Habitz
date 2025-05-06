import React from 'react'
import { DayPicker } from "react-day-picker"
import "react-day-picker/style.css"
import { useNavigate } from 'react-router'

function Calendar({ habitsObject }) {

  const navigate = useNavigate()



  let habitDates = Object.keys(habitsObject)
  console.log(Object.entries(habitsObject))


  function handleDayClick(day) {
    const formatted = day.toLocaleDateString("en-GB").replace(/\//g, "-")
    navigate(`/${formatted}`)
  }

  const datesWithHabits = {
    lvl0: [],
    lvl1: [], 
    lvl2: [],
    lvl3: [],
    lvl4: [],
  }

  const modifierClassNames={
    lvl0: "bg-lvl0",
    lvl1: "bg-lvl1",
    lvl2: "bg-lvl2",
    lvl3: "bg-lvl3",
    lvl4: "bg-lvl4"
  }

  Object.entries(habitsObject).forEach(([monthKey, dates]) => {
    Object.entries(dates).forEach(([dateStr, habits]) => {
      const total = habits.length
      const completed = habits.filter(habit => habit.status).length

      const percentageCompleted = (completed / total) * 100

      const [day, month, year] = dateStr.split("/").map(Number)
      const date = new Date(year, month - 1, day)

      if (percentageCompleted === 0) {
        datesWithHabits.lvl0.push(date)
      } else if (percentageCompleted < 25) {
        datesWithHabits.lvl1.push(date)
      } else if (percentageCompleted < 50) {
        datesWithHabits.lvl2.push(date)
      } else if (percentageCompleted < 75) {
        datesWithHabits.lvl3.push(date)
      } else {
        datesWithHabits.lvl4.push(date)
      }

    })
  })




  return (

    <div className='h-screen bg-main flex flex-col items-center gap-10'>
      {habitDates.length === 0 ? (
      <div className='text-accent'>
        You have 0 habits on your calendar! Add some to view your progress
      </div> ) : (
        habitDates.map((date) => {

          const [monthStr, yearStr] = date.split("/")
          const year = parseInt(yearStr, 10)
          const month = parseInt(monthStr, 10)

          return (
            <DayPicker 
            month={year && month ? new Date(year, month - 1) : new Date()} 
            className='bg-darkaccent p-4 rounded-3xl text-accent' 
            modifiers={datesWithHabits}
            modifiersClassNames={modifierClassNames}
            onSelect={handleDayClick} 
            mode="single"
            />
          )
        })
      )}  
    </div>
   )
}

export default Calendar