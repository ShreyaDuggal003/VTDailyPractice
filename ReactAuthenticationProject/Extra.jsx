//useredit
const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken'); // Adjust path as needed
 
const dataPath = path.join(__dirname, '../data/data.json');
 
router.post('/editusers', verifyToken, (req, res) => {
  const { email, name, role, delete: shouldDelete } = req.body;
 
  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }
 
  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) return res.status(500).json({ message: "Error reading data file" });
 
    let users = JSON.parse(data);
const userIndex = users.findIndex((u) => u.email === email);
 
    if (userIndex === -1) {
      return res.status(404).json({ message: "User not found" });
    }
 
    if (shouldDelete) {
      users.splice(userIndex, 1);
      fs.writeFile(dataPath, JSON.stringify(users, null, 2), (err) => {
        if (err) return res.status(500).json({ message: "Error deleting user" });
        return res.status(200).json({ message: "User deleted successfully" });
      });
    } else {
      // Update fields if provided
      if (name) users[userIndex].name = name;
      if (role) users[userIndex].role = role;
if (req.body.email !== email) users[userIndex].email = req.body.email;
 
      fs.writeFile(dataPath, JSON.stringify(users, null, 2), (err) => {
        if (err) return res.status(500).json({ message: "Error updating user" });
        return res.status(200).json({ message: "User updated successfully" });
      });
    }
  });
});
 
module.exports = router;



//UserList
import { useContext, useEffect, useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const UserList = () => {
    const { user } = useAuth();
    const [users, setUsers] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
    const [editData, setEditData] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const token = localStorage.getItem("token");
                const res = await fetch("/api/auth/getusers", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (res.status === 401) {
                    navigate("/login");
                    return;
                }
                const data = await res.json();
                setUsers(data);
            } catch (err) {
                console.error("Error fetching users:", err);
            }
        };

        fetchUsers();
    }, [navigate]);

    const handleDelete = async (email) => {
        if (!window.confirm("Are you sure you want to delete this user?")) return;

        try {
            const res = await fetch("/api/auth/editusers", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify({ email, delete: true }),
            });

            if (res.ok) {
                setUsers(users.filter((u) => u.email !== email));
            } else {
                const data = await res.json();
                alert(data.message || "Failed to delete user");
            }
        } catch (err) {
            alert("Error deleting user");
        }
    };

    const handleEditClick = (index) => {
        setEditingIndex(index);
        setEditData({ ...users[index] });
    };

    const handleSave = async () => {
        try {
            const res = await fetch("http://localhost:5000/api/editusers", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify(editData),
            });

            const data = await res.json();
            if (res.ok) {
                const updatedUsers = [...users];
                updatedUsers[editingIndex] = editData;
                setUsers(updatedUsers);
                setEditingIndex(null);
            } else {
                alert(data.message || "Update failed");
            }
        } catch (err) {
            alert("Server error while updating");
        }
    };

    const handleChange = (e) => {
        setEditData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">User List</h2>
            <table className="min-w-full border border-gray-300 text-left">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="p-2 border">Name</th>
                        <th className="p-2 border">Email</th>
                        <th className="p-2 border">Role</th>
                        {user.role === "admin" && <th className="p-2 border">Actions</th>}
                    </tr>
                </thead>
                <tbody>
                    {users.map((u, index) => (
                        <tr key={u.email} className="hover:bg-gray-100">
                            <td className="p-2 border">
                                {editingIndex === index ? (
                                    <input
                                        name="name"
                                        value={editData.name}
                                        onChange={handleChange}
                                        className="border px-2 py-1 w-full"
                                    />
                                ) : (
                                    u.name
                                )}
                            </td>
                            <td className="p-2 border">
                                {editingIndex === index ? (
                                    <input
                                        name="email"
                                        value={editData.email}
                                        onChange={handleChange}
                                        className="border px-2 py-1 w-full"
                                    />
                                ) : (
                                    u.email
                                )}
                            </td>
                            <td className="p-2 border">
                                {editingIndex === index ? (
                                    <select
                                        name="role"
                                        value={editData.role}
                                        onChange={handleChange}
                                        className="border px-2 py-1 w-full"
                                    >
                                        <option value="user">User</option>
                                        <option value="admin">Admin</option>
                                    </select>
                                ) : (
                                    u.role
                                )}
                            </td>
                            {user.role === "admin" && (
                                <td className="p-2 border space-x-2">
                                    {editingIndex === index ? (
                                        <>
                                            <button
                                                className="bg-green-500 text-white px-2 py-1 rounded"
                                                onClick={handleSave}
                                            >
                                                Save
                                            </button>
                                            <button
                                                className="bg-gray-400 text-white px-2 py-1 rounded"
                                                onClick={() => setEditingIndex(null)}
                                            >
                                                Cancel
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <button
                                                className="bg-blue-500 text-white px-2 py-1 rounded"
                                                onClick={() => handleEditClick(index)}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="bg-red-500 text-white px-2 py-1 rounded"
                                                onClick={() => handleDelete(u.email)}
                                            >
                                                Delete
                                            </button>
                                        </>
                                    )}
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList
