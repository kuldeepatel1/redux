import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Register from "./components/Register";
import Login from "./components/Login";
import AdminPanel from "./components/AdminPanel";
import UserHome from "./components/UserHome";
import UserProfile from "./components/UserProfile";

function App() {
  useEffect(() => {
    // Only add admin once
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (!users.some(u => u.role === "admin")) {
      users.push({
        id: Date.now(),
        name: "Admin",
        email: "admin@site.com",
        password: "admin",
        role: "admin",
        approved: true
      });
      localStorage.setItem("users", JSON.stringify(users));
    }
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/home" element={<UserHome />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
