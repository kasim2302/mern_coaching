import React, { useState } from "react";

const initialEmployees = [
  {
    id: 1,
    name: "Ravi",
    checkIn: "09:00 AM",
    checkOut: "06:00 PM",
    status: "Present",
  },
  {
    id: 2,
    name: "Priya",
    checkIn: "-",
    checkOut: "-",
    status: "Absent",
  },
  {
    id: 3,
    name: "Arun",
    checkIn: "09:15 AM",
    checkOut: "06:10 PM",
    status: "Present",
  },
  {
    id: 4,
    name: "Divya",
    checkIn: "-",
    checkOut: "-",
    status: "Absent",
  },
];

const AttendanceTracker = () => {
  const [employees] = useState(initialEmployees);
  const [search, setSearch] = useState("");

  const presentEmployees = employees.filter(
    (employee) => employee.status === "Present"
  );

  const absentEmployees = employees.filter(
    (employee) => employee.status === "Absent"
  );

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      {/* Header */}
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6">

        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Employee Attendance Tracker
        </h1>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          <div className="bg-green-100 p-5 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-green-700">
              Present Employees
            </h2>

            <p className="text-3xl font-bold mt-2">
              {presentEmployees.length}
            </p>
          </div>

          <div className="bg-red-100 p-5 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-red-700">
              Absent Employees
            </h2>

            <p className="text-3xl font-bold mt-2">
              {absentEmployees.length}
            </p>
          </div>

          <div className="bg-blue-100 p-5 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-blue-700">
              Total Employees
            </h2>

            <p className="text-3xl font-bold mt-2">
              {employees.length}
            </p>
          </div>

        </div>

        {/* Search */}

        <div className="mb-6">

          <input
            type="text"
            placeholder="Search Employee..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

        {/* Table */}

        <div className="overflow-x-auto">

          <table className="w-full border-collapse">

            <thead>

              <tr className="bg-blue-500 text-white">

                <th className="p-3 text-left">Employee Name</th>

                <th className="p-3 text-left">Check In</th>

                <th className="p-3 text-left">Check Out</th>

                <th className="p-3 text-left">Status</th>

              </tr>

            </thead>

            <tbody>

              {filteredEmployees.length > 0 ? (

                filteredEmployees.map((employee) => (

                  <tr
                    key={employee.id}
                    className="border-b hover:bg-gray-50"
                  >

                    <td className="p-3">{employee.name}</td>

                    <td className="p-3">{employee.checkIn}</td>

                    <td className="p-3">{employee.checkOut}</td>

                    <td className="p-3">

                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          employee.status === "Present"
                            ? "bg-green-200 text-green-800"
                            : "bg-red-200 text-red-800"
                        }`}
                      >
                        {employee.status}
                      </span>

                    </td>

                  </tr>

                ))

              ) : (

                <tr>

                  <td
                    colSpan="4"
                    className="text-center py-6 text-gray-500"
                  >
                    No Employee Found
                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default AttendanceTracker;