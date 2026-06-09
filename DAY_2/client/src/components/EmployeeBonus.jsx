import React, { useState } from "react"

const EmployeeBonus = () => {
  const [employee, setEmployee] = useState({
    name: "",
    salary: "",
  })

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const salary = Number(employee.salary);
    let bonus = 0

    if (salary > 30000) {
      bonus = 5000
    } else if (salary > 20000) {
      bonus = 3000
    } else {
      bonus = 1000
    }

    setResult({
      bonus,
      finalSalary: salary + bonus,
    })
  }

  return (
    <div className="flex flex-col items-center mt-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-80"
      >
        <h1 className="text-2xl font-bold text-center">
          Employee Bonus Calculator
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Employee Name"
          value={employee.name}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="number"
          name="salary"
          placeholder="Enter Salary"
          value={employee.salary}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <button className="bg-blue-600 text-white p-2 rounded">
          Calculate Bonus
        </button>
      </form>

      {result && (
        <div className="mt-5 text-lg">
          <p>
            <strong>Employee:</strong> {employee.name}
          </p>
          <p>
            <strong>Salary:</strong> ₹{employee.salary}
          </p>
          <p>
            <strong>Bonus:</strong> ₹{result.bonus}
          </p>
          <p>
            <strong>Final Salary:</strong> ₹{result.finalSalary}
          </p>
        </div>
      )}
    </div>
  )
}

export default EmployeeBonus;