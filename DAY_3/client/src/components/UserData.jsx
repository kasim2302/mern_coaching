import React, { useEffect, useState } from "react";

const UserData = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();

        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, [])

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-center mb-10">
        User Data Fetch
      </h1>

      {loading ? (
        <h2 className="text-center text-2xl font-semibold">
          Loading...
        </h2>
      ) : error ? (
        <h2 className="text-center text-red-500 text-2xl font-semibold">
          {error}
        </h2>
      ) : (
        <div className="flex flex-wrap justify-center gap-6">
          {users.map((user) => (
            <div
              key={user.id}
              className="w-80 border rounded-lg shadow-lg p-5"
            >
              <h2 className="text-xl font-bold mb-3">
                {user.name}
              </h2>

              <p className="mb-2">
                <span className="font-semibold">Email:</span>{" "}
                {user.email}
              </p>

              <p>
                <span className="font-semibold">Company:</span>{" "}
                {user.company.name}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default UserData;