import React, { useState } from "react";

const StudentGradeSystem = () => {
  const [student, setStudent] = useState({
    name: "",
    mark: "",
  })

  const [result, setResult] = useState("")

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const mark = Number(student.mark)

    if (mark >= 90) {
      setResult(`Grade A`)
    } else if (mark >= 75) {
      setResult(`Grade B`)
    } else if (mark >= 50) {
      setResult(`Grade C`)
    } else {
      setResult(`Fail`)
    }
  }

  return (
    <div className="flex flex-col items-center mt-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-80"
      >
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={student.name}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="number"
          name="mark"
          placeholder="Enter Mark"
          value={student.mark}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <button className="bg-blue-600 text-white p-2 rounded">
          Check Grade
        </button>
      </form>

      {result && (
        <div className="mt-5 text-xl font-semibold">
          {student.name} : {result}
        </div>
      )}
    </div>
  )
}

export default StudentGradeSystem