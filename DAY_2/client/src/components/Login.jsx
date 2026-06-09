import React, { useState } from 'react'

const Login = () => {


    const[form,setForm] = useState({email:"",password:""})
    const[error,setError] = useState("")

   const handlechange = (e) => {
       setForm({...form,[e.target.name]:e.target.value})
   }
   const handlesubmit = (e) => {
     e.preventDefault()
     if(!form.email){
        setError("Email is required")
        return
     }
     if(form.password.length < 6){
        setError("password should be more than 6 character.")
        return
     }
     setError("")
     alert("Logged in Successfully!")
     setForm({email:"",password:""})

   } 

   

  return (
    <>
    <div >
        <form onSubmit={handlesubmit} className='flex justify-center items-center flex-col mt-40 gap-5'>
              <h1 className="text-2xl font-bold">Login form</h1>

          <input type="text" name='email' value={form.email} placeholder='Enter your email' onChange={handlechange}
          className=' w-100 border px-3 py-2 rounded text-xl' />

           <input type="password" name='password' value={form.password} placeholder='Enter your password' onChange={handlechange}
          className=' w-100 border px-3 py-2 rounded text-xl' />
           {error && <p className="text-red-500">{error}</p>}
          <button className='bg-blue-800 w-100 px-3 py-2 rounded text-white text-xl'>Login</button>
        </form>
    </div>
    
    </>
  )
}

export default Login