import React from 'react'
import { DayPicker } from "react-day-picker"
import "react-day-picker/style.css"
import { useNavigate } from 'react-router'

function Calendar({ habitsObject }) {

  const navigate = useNavigate()



  let habitDates = Object.keys(habitsObject)

  function handleDayClick(day) {
    const formatted = day.toLocaleDateString("en-GB").replace(/\//g, "-")
    navigate(`/habit/${formatted}`)
  }


  return (

    <div className='h-screen-full bg-main flex flex-col items-center gap-10'>
    {(habitDates || []).map((date) => {

        const [monthStr, yearStr] = date.split("/")
        const year = parseInt(yearStr, 10)
        const month = parseInt(monthStr, 10)

        return (
        <DayPicker 
        month={year && month ? new Date(year, month - 1) : new Date()} 
        className='bg-darkaccent p-4 rounded-3xl text-accent' 
        onSelect={handleDayClick} 
        mode="single"
        />
        )
      })
    }
    </div>
  )
}

export default Calendar