import React, { useState } from 'react'

const EmployeeRegister = () => {

    const[form,setForm] = useState({name:"",department:"",salary:""})
    const[employees,setEmployees] = useState([])


    const handlechange = (e) => {
        setForm({...form,[e.target.name]:e.target.value})
    }
    const handledata = (e) => {
       e.preventDefault()
       setEmployees((prev)=>[...prev,form])
       alert("Submitted Successfully")
       setForm({name:"",department:"",salary:""})
       
       
    }
  return (
    <>
         <div>
            <form onSubmit={handledata} className='flex justify-center items-center gap-5 flex-col mt-40'>
                <h1 className='text-2xl font-bold'>Employee Register Form</h1>
                <input type="text" name='name' value={form.name} onChange={handlechange} placeholder='Enter your name'
                className='border w-80 p-2 rounded text-xl'/>
                  <input type="text" name='department' value={form.department} onChange={handlechange} placeholder='Enter your Department'
                className='border w-80 p-2 rounded text-xl'/>

                  <input type="number" name='salary' value={form.salary} onChange={handlechange} placeholder='Enter your salary'
                className='border w-80 p-2 rounded text-xl'/>
                 <input type="submit" className='bg-green-600 p-2 w-80 text-white text-xl rounded' />
            </form>
        
         </div>
          <div className='flex justify-center items-center gap-5 flex-col mt-10 text-xl'>
            <h2>Total Employees: {employees.length}</h2>
         </div>

         {employees.map((e,i)=>(
            <div key={i} className='flex justify-center items-center gap-5 flex-col mt-10 text-xl shadow'>
              <h2>Name:{e.name}</h2>
               <h2>Department:{e.department}</h2>
                <h2>Salary{e.salary}</h2>
            </div>
         ))}

         
    </>
  )
}

export default EmployeeRegister