import React from 'react'
import { DayPicker } from "react-day-picker"
import "react-day-picker/style.css"

function Calendar({ habitsObject }) {

  let year, month



  if (Object.keys(habitsObject).length > 0) {
    const habitDates = Object.keys(habitsObject) // gets all dates in the object in an array
    const mostRecentDate = habitDates[habitDates.length - 1]

    if (mostRecentDate) {
      const [dayStr, monthStr, yearStr] = mostRecentDate.split("/")
      year = parseInt(yearStr, 10)
      month = parseInt(monthStr, 10) - 1
    }
  }


  return (
    <div className='h-screen bg-main flex flex-col items-center'>
      <DayPicker 
      month={year && month ? new Date(year, month) : new Date()} 
      className='bg-darkaccent p-4 rounded-3xl text-accent' 
      onSelect={() => console.log("selected working g")} 
      mode="single"
      />
    </div>
  )
}

export default Calendar