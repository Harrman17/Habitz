import { useState, useEffect } from 'react'
import Header from './components/Header'
import HabitList from './components/HabitList'

function App() {

  const [habits, setHabits] = useState()
  const [currentDate, setCurrentDate] = useState("loading")

  useEffect(() => {
    const date = new Date()
    if (date.getDate() > 10 || date.getMonth() > 10) {
      setCurrentDate(date.getDate()+"/"+(date.getMonth() + 1)+"/"+date.getFullYear())
    } else {
      setCurrentDate("0"+date.getDate()+"/"+"0"+(date.getMonth() + 1)+"/"+date.getFullYear())
    }
  }, [])



  return (
    <div>
      <Header />
      <HabitList habits={habits} currentDate={currentDate}/>
    </div>
  )
}

export default App
