import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const found = users.find(u => u.email === email && u.password === password);
    if (!found) return alert("Invalid credentials");

    if (!found.approved) {
      return alert("Account pending admin approval");
    }

    if (found.role === "admin") {
      navigate("/admin", { state: { user: found } });
    } else {
      navigate("/home", { state: { user: found } });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <form className="flex flex-col gap-3 w-full max-w-md p-8 bg-white border border-gray-300 rounded-xl shadow-lg py-5"onSubmit={handleLogin} style={{ display:"flex", flexDirection:"column", margin: "auto", width: 300, gap: 10, marginTop:50 }}>
      <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
      <input className="w-full border border-gray-500 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email" type="email" onChange={e => setEmail(e.target.value)} required />
      <input className="w-full border border-gray-500 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} required />
      <button className="w-full px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md "type="submit">Login</button>
    </form>
    </div>
  );
}
