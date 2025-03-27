import React from 'react'
import { DayPicker } from "react-day-picker"
import "react-day-picker/style.css"

function Calendar() {


    const specialDays = {
      highlighted: new Date(2024, 0, 15), // March 15, 2024 (Month is 0-based)
    }



  return (
    <div className='h-screen bg-main flex flex-col items-center'>
      <DayPicker 
      month={new Date(2024, 0)} 
      className='bg-darkaccent p-4 rounded-3xl text-accent' 
      onSelect={() => console.log("selected working g")} 
      mode="single"
      modifiers={specialDays} 
      modifiersClassNames={{ highlighted: "bg-gray-500 rounded-2xl" }}
      />
    </div>
  )
}

export default Calendar