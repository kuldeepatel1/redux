import React, { useEffect, useState } from "react";  // import here
import Edituser from "./Edituser";
import AddUser from "./AddUser";

export default function AdminPanel() {
  const [users, setUsers] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedUser, setEditedUser] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(list);
  }, []);

  const updateUsers = (newList) => {
    setUsers(newList);
    localStorage.setItem("users", JSON.stringify(newList));
  };

  const approveUser = (id) => {
    updateUsers(users.map((u) => (u.id === id ? { ...u, approved: true } : u)));
  };

  const deleteUser = (id) => {
    updateUsers(users.filter((u) => u.id !== id));
  };

  // Edit user handlers
  const handleEditClick = (user) => {
    setEditedUser(user);
    setShowEditModal(true);
  };
  const handleSaveEdit = (updatedUser) => {
    const updatedList = users.map((u) =>
      u.id === updatedUser.id ? updatedUser : u
    );
    updateUsers(updatedList);
    setShowEditModal(false);
  };
  const handleCancelEdit = () => {
    setShowEditModal(false);
  };

  // Add user handlers
  const handleAddClick = () => {
    setShowAddModal(true);
  };
  const handleSaveAdd = (newUser) => {
    updateUsers([...users, newUser]);
    setShowAddModal(false);
  };
  const handleCancelAdd = () => {
    setShowAddModal(false);
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
        Admin Dashboard
      </h2>

      {/* Add User Button */}
      <div className="mb-4 text-center">
        <button
          onClick={handleAddClick}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md"
        >
          Add New User
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left border">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Approved</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{u.name}</td>
                <td className="px-4 py-2">{u.email}</td>
                <td className="px-4 py-2">{u.approved ? "✅" : "❌"}</td>
                <td className="px-4 py-2">{u.role}</td>
                <td className="px-4 py-2">
                  <div className="flex gap-2 flex-wrap">
                    {u.role !== "admin" && !u.approved && (
                      <button
                        onClick={() => approveUser(u.id)}
                        className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                      >
                        Approve
                      </button>
                    )}
                    <button
                      onClick={() => handleEditClick(u)}
                      className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>
                    {u.role !== "admin" && (
                      <button
                        onClick={() => deleteUser(u.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit User Modal */}
      {showEditModal && (
        <Edituser
          user={editedUser}
          onSave={handleSaveEdit}
          onClose={handleCancelEdit}
        />
      )}

      {/* Add User Modal */}
      {showAddModal && <AddUser onSave={handleSaveAdd} onClose={handleCancelAdd} />}
    </div>
  );
}
