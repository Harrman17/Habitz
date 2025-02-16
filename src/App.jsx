import { useState, useEffect } from 'react'
import Header from './components/Header'
import HabitList from './components/HabitList'

function App() {

  const [habit, setHabit] = useState()
  const [allHabits, setAllHabits] = useState([])
  const [addHabitBtn, setAddHabitBtn] = useState(false)
  const [currentDate, setCurrentDate] = useState("loading")

  useEffect(() => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')  
    const year = date.getFullYear()


    setCurrentDate(`${day}/${month}/${year}`)
  }, [])

  const openAddHabit = () => {
    setAddHabitBtn(prevState => !prevState)
    setHabit("")
  }

  function addHabit() {
    const habitMap = new Map()
    habitMap.set("habit_name", habit)
    habitMap.set("start_date", currentDate)
    setAllHabits(prevHabits => [...prevHabits, habitMap])
    console.log(allHabits)
  }

return (
    <div>
      <Header />
      <HabitList habit={habit} setHabit={setHabit} currentDate={currentDate} openAddHabit={openAddHabit} addHabitBtn={addHabitBtn} addHabit={addHabit} allHabits={allHabits}/>
    </div>
  )
}

export default App
