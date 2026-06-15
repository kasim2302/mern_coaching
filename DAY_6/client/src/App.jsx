import React from 'react'
import './index.css'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import EmployeeAttendanceTracker from './components/EmployeeAttendanceTracker'
import MovieTicketBooking from './components/MovieTicketBooking'
import DigitalClockStopwatch from './components/DigitalClockStopwatch'
const App = () => {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/task1' element={<EmployeeAttendanceTracker/>} />
    <Route path='/task2' element={<MovieTicketBooking/>} />
    <Route path='/task3' element={<DigitalClockStopwatch/>} />



    
   </Routes>
   </>
  )
}

export default App