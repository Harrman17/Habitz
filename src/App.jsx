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
    habitMap.set("status", false)
    setAllHabits(prevHabits => [...prevHabits, habitMap])
  }

  function completeHabit(index) {
    console.log(index)
    setAllHabits(prevHabits => {
      const currentHabits = [...prevHabits]

      const updatedHabit = new Map(currentHabits[index]) // creates new map of the current habit we're ticking off

      updatedHabit.set("status", !updatedHabit.get("status"))

      currentHabits[index] = updatedHabit // sets the habit we're ticking off to opposite status

      return currentHabits

    })

  }

return (
    <div>
      <Header />
      <HabitList habit={habit} setHabit={setHabit} currentDate={currentDate} openAddHabit={openAddHabit} addHabitBtn={addHabitBtn} addHabit={addHabit} allHabits={allHabits} completeHabit={completeHabit}/>
    </div>
  )
}

export default App
