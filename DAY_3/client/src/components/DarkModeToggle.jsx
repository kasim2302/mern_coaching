import React, { useState } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false)

  const handleToggle = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div
      className={`min-h-screen flex flex-col justify-center items-center transition-all duration-300 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-black"
      }`}
    >
      <h1 className="text-4xl font-bold mb-6">
        Dark Mode Toggle
      </h1>

      <h2 className="text-2xl mb-6">
        Current Mode:{" "}
        <span className="font-semibold">
          {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </span>
      </h2>

      <button
        onClick={handleToggle}
        className={`px-6 py-3 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300 ${
          darkMode
            ? "bg-white text-black hover:bg-gray-200"
            : "bg-black text-white hover:bg-gray-800"
        }`}
      >
        Switch to {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  )
}

export default DarkModeToggle