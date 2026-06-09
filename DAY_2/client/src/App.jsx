import React from 'react'
import { Routes,Route } from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './components/Login'
import ProductCalculator from './components/ProductCalculator'
import StudentGradeSystem from './components/StudentGradeSystem'
import EmployeeBonus from './components/EmployeeBonus'
import TodoApp from './components/TodoApp'
import UserSearch from './components/UserSearch'
const App = () => {
  return (
   <>
   <Navbar/>
   <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/task1" element={<Login/>}></Route>
      <Route path="/task2" element={<ProductCalculator/>}></Route>
      <Route path="/task3" element={<StudentGradeSystem/>}></Route>
      <Route path="/task4" element={<EmployeeBonus/>}></Route>
      <Route path="/task5" element={<TodoApp/>}></Route>
      <Route path="/task6" element={<UserSearch/>}></Route>
    


   </Routes>
   </>
  )
}

export default App