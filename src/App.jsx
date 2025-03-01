import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Header from './components/Header'
import HabitList from './components/HabitList'
import Calendar from './components/Calendar'


function App() {

  const [habit, setHabit] = useState()
  const [habitID, setHabitID] = useState(0)
  const [allHabits, setAllHabits] = useState([])
  const [addHabitBtn, setAddHabitBtn] = useState(false)
  const [currentDate, setCurrentDate] = useState("loading")
  const [deleteHabit, setDeleteHabit] = useState(false)

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
    setHabitID(prevCount => prevCount + 1)
    const habitMap = new Map()
    
    if (!habit.trim()) {
      return
    }

    habitMap.set("ID", habitID)
    habitMap.set("habit_name", habit)
    habitMap.set("start_date", currentDate)
    habitMap.set("status", false)
    if (habit) {
    setAllHabits(prevHabits => [...prevHabits, habitMap])
    setHabit("")
    }
    console.log(allHabits)
  }

  function completeHabit(ID) {

      setAllHabits((prevHabits) => {
        if (deleteHabit) {
          return prevHabits.filter((habit) => habit.get("ID") !== ID)
        } else {
        return prevHabits.map((habit) => { // so iterate through the currentHabits
          if (habit.get("ID") == ID) { // if the habits ID matches the one being clicked on
            const updatedHabit = new Map(habit) // create a new map of the habit
            updatedHabit.set("status", !updatedHabit.get("status")) // set the status of this newly created habit to the opposite

            return updatedHabit
          }
          return habit // returns habit by default if the ID does not === the ones being passed in/clicked on -- returns unchanged habit
        })
       } 
      })

  }

  function deleteHabits() {
    setDeleteHabit(prevState => !prevState)
  }


return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
      <>
        <Header 
        deleteHabits={deleteHabits}/>
        <HabitList 
        habit={habit} 
        setHabit={setHabit} 
        currentDate={currentDate} 
        openAddHabit={openAddHabit} 
        addHabitBtn={addHabitBtn} 
        addHabit={addHabit} 
        allHabits={allHabits} 
        completeHabit={completeHabit}
        deleteHabit={deleteHabit}/>
      </>
      } />
      <Route path="calendar" element={
        <Calendar />
      }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
