import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <div className=' flex justify-between items-center p-5 shadow-xl'>
        <div className='text-2xl'>
            TASKS
        </div>
        <div className='flex gap-10 text-xl'>
            <Link to="/">Home</Link>
            <Link to="/task1">Task1</Link>
            <Link to="/task2">Task2</Link>
            <Link to="/task3">Task3</Link>
          
    





        </div>
    </div>
    </>
  )
}

export default Navbar