import React, { useEffect, useRef, useState } from "react";

const PreviousSearchTracker = () => {
  const [search, setSearch] = useState("");
  const previousSearch = useRef("");

  useEffect(() => {
    previousSearch.current = search;
  }, [search]);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-96 p-6 shadow-lg rounded-lg border">
        <h1 className="text-3xl font-bold text-center mb-6">
          Previous Search Tracker
        </h1>

        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border p-3 rounded text-lg"
        />

        <div className="mt-6 space-y-3">
          <h2 className="text-xl">
            <span className="font-bold">Current Search:</span>{" "}
            {search || "None"}
          </h2>

          <h2 className="text-xl">
            <span className="font-bold">Previous Search:</span>{" "}
            {previousSearch.current || "None"}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PreviousSearchTracker;