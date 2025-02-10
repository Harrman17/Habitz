import { useState, useEffect } from 'react'
import Header from './components/Header'
import HabitList from './components/HabitList'

function App() {

  const [habit, setHabit] = useState()
  const [addHabitBtn, setAddHabitBtn] = useState(false)
  const [currentDate, setCurrentDate] = useState("loading")

  useEffect(() => {
    const date = new Date()
    if (date.getDate() <= 10 || date.getMonth() <= 10) {
      setCurrentDate(date.getDate()+"/"+(date.getMonth() + 1)+"/"+date.getFullYear())
    } else {
      setCurrentDate("0"+date.getDate()+"/"+"0"+(date.getMonth() + 1)+"/"+date.getFullYear())
    }
  }, [])

  const addHabit = () => {
    setAddHabitBtn(prevState => !prevState)
    setHabit("")
  }



  return (
    <div>
      <Header />
      <HabitList habit={habit} setHabit={setHabit} currentDate={currentDate} addHabit={addHabit} addHabitBtn={addHabitBtn}/>
    </div>
  )
}

export default App
