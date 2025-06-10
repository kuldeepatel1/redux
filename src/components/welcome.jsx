import React from "react";
import { Link } from "react-router-dom";

export default function WelCome() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-700 mb-8">
        User Management System
      </h1>

      <div className="flex gap-6">
        <Link
          to="/register"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded shadow-md transition duration-300"
        >
          Register
        </Link>
        <Link
          to="/login"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded shadow-md transition duration-300"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
