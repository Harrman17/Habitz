import React from 'react'
import { DayPicker } from "react-day-picker"
import "react-day-picker/style.css"

function Calendar({ habitsObject }) {

  let habitDates

  if (Object.keys(habitsObject).length > 0) {
    habitDates = Object.keys(habitsObject) // gets all dates in the object in an array
  }


  return ( // need to create a map that 

    <div className='h-screen bg-main flex flex-col items-center gap-10'>
    {(habitDates || []).map((date) => {

        const [dayStr, monthStr, yearStr] = date.split("/")
        const year = parseInt(yearStr, 10)
        const month = parseInt(monthStr, 10)

        return (
        <DayPicker 
        month={year && month ? new Date(year, month) : new Date()} 
        className='bg-darkaccent p-4 rounded-3xl text-accent' 
        onSelect={() => console.log("selected working g")} 
        mode="single"
        />
        )
      })
    }
    </div>
  )
}

export default Calendar