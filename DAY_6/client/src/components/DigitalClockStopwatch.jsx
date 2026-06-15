import React, { useEffect, useRef, useState } from "react";

const DigitalClockStopwatch = () => {

  // Digital Clock
  const [currentTime, setCurrentTime] = useState(new Date());

  // Stopwatch
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const intervalRef = useRef(null);

  // Current Time
  useEffect(() => {

    const timer = setInterval(() => {

      setCurrentTime(new Date());

    }, 1000);

    return () => clearInterval(timer);

  }, []);

  // Stopwatch
  useEffect(() => {

    if (isRunning) {

      intervalRef.current = setInterval(() => {

        setSeconds((prev) => prev + 1);

      }, 1000);

    } else {

      clearInterval(intervalRef.current);

    }

    return () => clearInterval(intervalRef.current);

  }, [isRunning]);

  // Buttons

  const handleStart = () => {

    setSeconds(0);
    setIsRunning(true);

  };

  const handleStop = () => {

    setIsRunning(false);

  };

  const handleResume = () => {

    setIsRunning(true);

  };

  const handleReset = () => {

    setIsRunning(false);

    setSeconds(0);

  };

  // Format stopwatch

  const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");

  const mins = String(
    Math.floor((seconds % 3600) / 60)
  ).padStart(2, "0");

  const secs = String(seconds % 60).padStart(2, "0");

  return (

    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="bg-white shadow-xl rounded-2xl p-10 w-[500px]">

        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">

          Digital Clock & Stopwatch

        </h1>

        {/* Digital Clock */}

        <div className="text-center mb-10">

          <h2 className="text-xl font-semibold text-gray-700 mb-3">

            Current Time

          </h2>

          <p className="text-5xl font-bold text-gray-800">

            {currentTime.toLocaleTimeString()}

          </p>

        </div>

        {/* Stopwatch */}

        <div className="text-center">

          <h2 className="text-xl font-semibold text-gray-700 mb-3">

            Stopwatch

          </h2>

          <p className="text-6xl font-bold mb-8">

            {hrs}:{mins}:{secs}

          </p>

          <div className="flex justify-center gap-4">

            <button
              onClick={handleStart}
              className="bg-green-500 px-5 py-2 rounded-lg text-white font-semibold hover:bg-green-600"
            >
              Start
            </button>

            <button
              onClick={handleStop}
              className="bg-red-500 px-5 py-2 rounded-lg text-white font-semibold hover:bg-red-600"
            >
              Stop
            </button>

            <button
              onClick={handleResume}
              className="bg-blue-500 px-5 py-2 rounded-lg text-white font-semibold hover:bg-blue-600"
            >
              Resume
            </button>

            <button
              onClick={handleReset}
              className="bg-gray-600 px-5 py-2 rounded-lg text-white font-semibold hover:bg-gray-700"
            >
              Reset
            </button>

          </div>

        </div>

      </div>

    </div>

  );

};

export default DigitalClockStopwatch;