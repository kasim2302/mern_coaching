import React from 'react'
import './index.css'
import Navbar from './components/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import EmployeeRegister from './components/EmployeeRegister'
import ProductSearch from './components/ProductSearch'
import UserData from './components/UserData'
import DarkModeToggle from './components/DarkModeToggle'
import PreviousSearchTracker from './components/PreviousSearchTracker'
const App = () => {
  return (
   <>
   
    <Navbar/>
   <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/task1" element={<EmployeeRegister/>} />
        <Route path="/task2" element={<ProductSearch/>}/>
        <Route path="/task3" element={<UserData/>}/>
        <Route path="/task4" element={<DarkModeToggle/>}/>
        <Route path="/task5" element={<PreviousSearchTracker/>}/>

      
    </Routes>
    
   
   </>
  )
}

export default App