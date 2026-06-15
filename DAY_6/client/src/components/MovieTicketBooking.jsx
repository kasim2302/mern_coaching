import React, { useState } from "react";

const movies = [
  {
    id: 1,
    name: "Leo",
    price: 200,
    image:
      "https://via.placeholder.com/150x200?text=Leo",
  },
  {
    id: 2,
    name: "Jailer",
    price: 180,
    image:
      "https://via.placeholder.com/150x200?text=Jailer",
  },
  {
    id: 3,
    name: "GOAT",
    price: 250,
    image:
      "https://via.placeholder.com/150x200?text=GOAT",
  },
];

const MovieTicketBooking = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [seats, setSeats] = useState(1);

  const totalAmount = selectedMovie
    ? selectedMovie.price * seats
    : 0;

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
          🎬 Movie Ticket Booking
        </h1>

        {/* Movie List */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {movies.map((movie) => (

            <div
              key={movie.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transition hover:scale-105
              ${
                selectedMovie?.id === movie.id
                  ? "ring-4 ring-blue-500"
                  : ""
              }`}
              onClick={() => setSelectedMovie(movie)}
            >

              <img
                src={movie.image}
                alt={movie.name}
                className="w-full h-60 object-cover"
              />

              <div className="p-5">

                <h2 className="text-2xl font-bold">
                  {movie.name}
                </h2>

                <p className="text-gray-600 mt-2">
                  Ticket Price: ₹{movie.price}
                </p>

              </div>

            </div>

          ))}

        </div>

        {/* Booking Section */}

        {selectedMovie && (

          <div className="mt-10 bg-white rounded-xl shadow-lg p-8">

            <h2 className="text-3xl font-bold mb-6">
              Booking Details
            </h2>

            <div className="space-y-4">

              <div>

                <label className="font-semibold">
                  Selected Movie
                </label>

                <p className="text-lg">
                  {selectedMovie.name}
                </p>

              </div>

              <div>

                <label className="font-semibold">
                  Ticket Price
                </label>

                <p className="text-lg">
                  ₹{selectedMovie.price}
                </p>

              </div>

              <div>

                <label className="font-semibold block mb-2">
                  Number of Seats
                </label>

                <input
                  type="number"
                  min="1"
                  value={seats}
                  onChange={(e) =>
                    setSeats(Number(e.target.value))
                  }
                  className="border p-3 rounded-lg w-32"
                />

              </div>

              <div>

                <h3 className="text-2xl font-bold text-green-600">

                  Total Amount: ₹{totalAmount}

                </h3>

              </div>

            </div>

          </div>

        )}

        {/* Booking Summary */}

        {selectedMovie && (

          <div className="mt-8 bg-blue-50 rounded-xl p-6 shadow">

            <h2 className="text-2xl font-bold mb-4">

              Booking Summary

            </h2>

            <p>
              <span className="font-semibold">
                Movie:
              </span>{" "}
              {selectedMovie.name}
            </p>

            <p>
              <span className="font-semibold">
                Seats:
              </span>{" "}
              {seats}
            </p>

            <p>
              <span className="font-semibold">
                Price per Ticket:
              </span>{" "}
              ₹{selectedMovie.price}
            </p>

            <p className="text-xl font-bold text-green-700 mt-3">

              Total: ₹{totalAmount}

            </p>

          </div>

        )}

      </div>

    </div>
  );
};

export default MovieTicketBooking;