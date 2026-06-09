import React, { useState } from "react"

const TodoApp = () => {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])

  const addTask = () => {
    if (task.trim() === "") return

    setTasks([...tasks, task])
    setTask("")
  }

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks)
  }

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold mb-5">
        Todo Task Counter
      </h1>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border p-2 rounded w-80"
        />

        <button
          onClick={addTask}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      <h2 className="mt-5 text-xl font-semibold">
        Total Tasks: {tasks.length}
      </h2>

      {tasks.length === 0 ? (
        <p className="mt-4 text-red-500">
          No Tasks Available
        </p>
      ) : (
        <ul className="mt-4 w-96">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex justify-between items-center border p-2 mb-2 rounded"
            >
              {task}

              <button
                onClick={() => deleteTask(index)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default TodoApp