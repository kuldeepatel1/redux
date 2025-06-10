import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function UserHome() {
  const { state } = useLocation();
  const user = state?.user;

  if (!user)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-red-600 font-semibold">
          No user data found. Please log in again.
        </p>
      </div>
    );

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">
        Welcome, {user.name}!
      </h2>

      <Link
        to="/profile"
        state={{ user }}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow-md transition duration-300"
      >
        Go to Profile
      </Link>
    </div>
  );
}
