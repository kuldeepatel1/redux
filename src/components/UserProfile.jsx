import React from "react";
import { useLocation } from "react-router-dom";

export default function UserProfile() {
  const { state } = useLocation();
  const user = state?.user;

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-red-600 font-semibold">
          No user data. Please login again.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-16 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
        Profile
      </h2>
      <div className="space-y-4 text-gray-800 text-lg">
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Role:</strong> {user.role}
        </p>
        <p>
          <strong>Approved:</strong>{" "}
          <span className={user.approved ? "text-green-600" : "text-red-600"}>
            {user.approved ? "Yes" : "No"}
          </span>
        </p>
      </div>
    </div>
  );
}
