import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router'
import { Navigate } from 'react-router-dom'
import Header from './components/Header'
import HabitList from './components/HabitList'
import Calendar from './components/Calendar'
import HabitPageRender from './HabitPageRender'



function App() {

  const [habit, setHabit] = useState("")
  const [habitID, setHabitID] = useState(0)
  const [habitsObject, setHabitsObject] = useState({
    "04/2025": {
      "01/04/2025": [
        { name: "Drink Water", status: true },
        { name: "Workout", status: false },
        { name: "Read", status: false }
      ], // 1/3 = 33% (lvl2)
  
      "02/04/2025": [
        { name: "Meditate", status: true },
        { name: "Workout", status: true }
      ], // 2/2 = 100% (lvl5)
  
      "03/04/2025": [
        { name: "Read", status: false }
      ], // 0/1 = 0% (optional to skip or add lvl0)
  
      "04/04/2025": [
        { name: "Workout", status: true },
        { name: "Stretch", status: true },
        { name: "Hydrate", status: true },
        { name: "Read", status: true },
        { name: "Sleep Early", status: false }
      ], // 4/5 = 80% (lvl4)
  
      "05/04/2025": [
        { name: "Drink Water", status: true }
      ] // 1/1 = 100% (lvl5)
    }
  })
  // all the habits but with dates as key
  
  const [addHabitBtn, setAddHabitBtn] = useState(false)
  const [currentDate, setCurrentDate] = useState()
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

  

  useEffect(() => {
    console.log(habitsObject)
  }, [habitsObject])

  function deleteHabitsToggle() { 
    setDeleteHabit(prevState => !prevState)
  }


  const getFormattedDate = () => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };


return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate to={`/${getFormattedDate()}`} />} />

      <Route path="calendar" element={
        <>
          <Header showIcons={false}/>
          <Calendar habitsObject={habitsObject}/>
        </>
      }/>
      
      <Route path="/:date" element={
        <>
          <Header
          showIcons={true}
          deleteHabitsToggle={deleteHabitsToggle}/>
          <HabitPageRender
          habit={habit} 
          setHabit={setHabit} 
          currentDate={currentDate} 
          openAddHabit={openAddHabit} 
          addHabitBtn={addHabitBtn} 
          habitsObject={habitsObject} 
          deleteHabit={deleteHabit}
          setHabitID={setHabitID}
          habitID={habitID}
          setHabitsObject={setHabitsObject}/>
        </>
      }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

