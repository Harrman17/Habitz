import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Header from './components/Header'
import HabitList from './components/HabitList'
import Calendar from './components/Calendar'


function App() {

  const [habit, setHabit] = useState()
  const [habitID, setHabitID] = useState(0)
  const [habitsObject, setHabitsObject] = useState({})
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
  

  const today = new Date()
  const day = String(today.getDate()).padStart(2, '0')
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const year = today.getFullYear()

  const fullDate = `${day}/${month}/${year}`  
  const monthKey = `${month}/${year}`   


  function addHabit() {

    if (!habit.trim()) {
      return
    }


  const newHabitID = habitID + 1;
  setHabitID(newHabitID);
  
    const habitObject = {
      ID: habitID,
      habit_name: habit,
      status: false
    }


    if (!habitsObject[monthKey]) {
      habitsObject[monthKey] = {}
    }

    if (!habitsObject[monthKey][fullDate]) {
      habitsObject[monthKey][fullDate] = []
    }

     
  
    setHabitsObject(prev => {
      const updated = { ...prev }
  

      updated[monthKey] = {
        ...(prev[monthKey] || {}),
        [fullDate]: [...(prev[monthKey]?.[fullDate] || []), habitObject]
      }
    
      return updated
    })
  
    setHabit("")
  }
  

  useEffect(() => {
    console.log(habitsObject)
  }, [habitsObject])





  function completeHabit(ID) { 
    setHabitsObject(prev => ({
      ...prev,
      [currentDate]: prev[currentDate].map((habit) => {
        if (habit.get("ID") === ID) {
          const updatedHabit = new Map(habit)
          updatedHabit.set("status", !updatedHabit.get("status"))
          return updatedHabit
        }
        return habit
      })
    })
   )
  }


  function removeHabit(ID) {
    if (deleteHabit) {
      setHabitsObject((prev) => {

        const updatedHabits = prev[currentDate].filter(habit => habit.get("ID") !== ID)
        console.log(updatedHabits)

        const updatedObject = {...prev, [currentDate]: updatedHabits }

        return updatedObject

      })
    }
  }



  function deleteHabitsToggle() { 
    setDeleteHabit(prevState => !prevState)
  }




return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
      <>
        <Header 
        deleteHabitsToggle={deleteHabitsToggle}
        showIcons={true}/>
        <HabitList 
        habit={habit} 
        setHabit={setHabit} 
        currentDate={currentDate} 
        openAddHabit={openAddHabit} 
        addHabitBtn={addHabitBtn} 
        addHabit={addHabit} 
        habitsObject={habitsObject} 
        completeHabit={completeHabit}
        deleteHabit={deleteHabit}
        removeHabit={removeHabit}
        monthKey={monthKey}
        />
      </>
      } />
      <Route path="calendar" element={
        <>
          <Header showIcons={false}/>
          <Calendar habitsObject={habitsObject}/>
        </>
      }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

