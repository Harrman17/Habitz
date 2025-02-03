import { useState } from 'react'
import Header from './components/Header'
import HabitList from './components/HabitList'

function App() {

  const [habits, setHabits] = useState([
    {
      "id": 1,
      "name": "Drink Water",
      "start_date": "2025-01-01",
      "progress": {
        "2025-01-01": true,
        "2025-01-02": false,
        "2025-01-03": true
      }
    },
    {
      "id": 2,
      "name": "Gym Workout",
      "start_date": "2025-01-01",
      "progress": {
        "2025-01-01": true,
        "2025-01-03": true,
        "2025-01-05": false
      }
    },
    {
      "id": 3,
      "name": "Read a Book",
      "frequency": "daily",
      "start_date": "2025-01-01",
      "progress": {
        "2025-01-01": true,
        "2025-01-02": true,
        "2025-01-03": true
      }
    }
  ]
  )

  return (
    <>
      <Header />
      <HabitList habits={habits}/>
    </>
  )
}

export default App
