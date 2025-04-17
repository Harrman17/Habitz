import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Header from './components/Header'
import HabitList from './components/HabitList'
import Calendar from './components/Calendar'


function App() {

  const [habit, setHabit] = useState()
  const [habitID, setHabitID] = useState(0)
  const [habitsObject, setHabitsObject] = useState({
    "03/2025": {
      "01/03/2025": [
        { ID: 1, habit_name: "Workout", status: false },
        { ID: 2, habit_name: "Read", status: false }
      ],
      "02/03/2025": [
        { ID: 3, habit_name: "Code", status: false }
      ],
      "03/03/2025": [
        { ID: 4, habit_name: "Meditate", status: false }
      ],
      "04/03/2025": [
        { ID: 5, habit_name: "Walk", status: true },
        { ID: 6, habit_name: "Stretch", status: false }
      ],
      "10/03/2025": [
        { ID: 7, habit_name: "Drink Water", status: true }
      ],
      "15/03/2025": [
        { ID: 8, habit_name: "Yoga", status: false },
        { ID: 9, habit_name: "Read", status: true }
      ],
      "20/03/2025": [
        { ID: 10, habit_name: "Workout", status: false }
      ],
      "25/03/2025": [
        { ID: 11, habit_name: "Code", status: false }
      ],
      "30/03/2025": [
        { ID: 12, habit_name: "Sleep Early", status: false }
      ]
    },
    "04/2025": {
      "01/04/2025": [
        { ID: 13, habit_name: "Journal", status: false }
      ],
      "05/04/2025": [
        { ID: 14, habit_name: "Run", status: true },
        { ID: 15, habit_name: "Workout", status: false }
      ],
      "10/04/2025": [
        { ID: 16, habit_name: "Meditate", status: false }
      ],
      "12/04/2025": [
        { ID: 17, habit_name: "Read", status: true }
      ],
      "15/04/2025": [
        { ID: 18, habit_name: "Code", status: false }
      ],
      "18/04/2025": [
        { ID: 19, habit_name: "Stretch", status: true },
        { ID: 20, habit_name: "Drink Water", status: false }
      ],
      "22/04/2025": [
        { ID: 21, habit_name: "Journal", status: false }
      ],
      "25/04/2025": [
        { ID: 22, habit_name: "Yoga", status: true }
      ],
      "30/04/2025": [
        { ID: 23, habit_name: "Sleep Early", status: false }
      ]
    },
    "05/2025": {
      "01/05/2025": [
        { ID: 24, habit_name: "Workout", status: false },
        { ID: 25, habit_name: "Code", status: false }
      ],
      "05/05/2025": [
        { ID: 26, habit_name: "Meditate", status: true }
      ],
      "10/05/2025": [
        { ID: 27, habit_name: "Read", status: false },
        { ID: 28, habit_name: "Drink Water", status: true }
      ],
      "15/05/2025": [
        { ID: 29, habit_name: "Run", status: false }
      ],
      "20/05/2025": [
        { ID: 30, habit_name: "Yoga", status: false }
      ],
      "25/05/2025": [
        { ID: 31, habit_name: "Journal", status: false }
      ],
      "30/05/2025": [
        { ID: 32, habit_name: "Stretch", status: false },
        { ID: 33, habit_name: "Walk", status: false }
      ]
    }
  }
  )
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
        ...prev[monthKey] || {},
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
    setHabitsObject(prev => {
      const updated = { ...prev }

      updated[monthKey] = {
        ...prev[monthKey],
        [currentDate]: prev[monthKey][currentDate].map(habit => {
          return habit.ID === ID ? { ...habit, status: !habit.status } : habit
        })
      }
      return updated
    })
  }


  function removeHabit(ID) {
    if (deleteHabit) {
      setHabitsObject(prev => {
        const updated = { ...prev }

        updated[monthKey] = {
          ...prev[monthKey],
          [currentDate]: prev[monthKey][currentDate].filter(habit => habit.ID !== ID)
        }

        return updated

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

