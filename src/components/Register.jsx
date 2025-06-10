import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = e => setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some(u => u.email === data.email)) {
      alert("Email already registered");
      return;
    }

    users.push({
      id: Date.now(),
      ...data,
      role: "user",
      approved: false
    });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registered! Wait for admin approval.");
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <form className="flex flex-col gap-9 w-full max-w-md p-10 bg-white border border-gray-300 rounded-xl shadow-lg py-10" onSubmit={handleSubmit} style={{ display:"flex", flexDirection:"column", margin: "auto", width: 300, gap: 10, marginTop:50 }}>
      <h2 className="text-3xl font-bold text-center mb-6">User Registration</h2>
      <input className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" name="name" placeholder="Name" onChange={handleChange} required />
      <input className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" name="email" placeholder="Email" type="email" onChange={handleChange} required />
      <input className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" name="password" placeholder="Password" type="password" onChange={handleChange} required />
      <button  className="w-full px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md " type="submit">Register</button>
    </form>
    </div>
  );
}
