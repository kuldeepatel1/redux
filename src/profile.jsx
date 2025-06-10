// src/components/UserProfile.jsx
import React from "react";
import { useLocation } from "react-router-dom";

function UserProfile() {
  const { state } = useLocation();
  const user = state?.user;

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
      <p>Role: {user?.role}</p>
    </div>
  );
}

export default UserProfile;
