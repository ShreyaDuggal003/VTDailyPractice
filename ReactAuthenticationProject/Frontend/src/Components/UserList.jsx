// import React, { useEffect, useState, useCallback } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../Context/AuthContext';

// const UserList = () => {
//     const [users, setUsers] = useState([]);
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const { auth, logout } = useAuth();

//       const userInfo = auth?.user || {};

//       const handleLogout = () => {
//         logout();
//         navigate('/login');
//       };

//     const fetchUsers = useCallback(async () => {
    //     const token = localStorage.getItem('token');
    //     if (!token) {
    //         navigate('/login');
    //         return;
    //     }

    //     try {
    //         const res = await fetch('http://localhost:5000/api/getusers', {
    //             method: 'GET',
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //             },
    //         });

    //         const data = await res.json();

    //         if (res.status === 200) {
    //             setUsers(data.users);
    //         } else if (res.status === 401) {
    //             navigate('/login');
    //         } else {
    //             setError(data.message || 'Failed to fetch users');
    //         }
    //     } catch (err) {
    //         setError('Server error');
    //     }
    // }, [navigate]);

//     useEffect(() => {
//         fetchUsers();
//     }, [fetchUsers]);

//     return (
//         <div className="max-w-3xl mx-auto mt-10 p-4">
//             <h1 className="text-2xl font-semibold mb-4 text-center">User List</h1>
//             {error && <p className="text-red-500 text-center mb-4">{error}</p>}
//             <div className="overflow-x-auto">
//                 <table className="w-full text-left border border-gray-300">
//                     <thead className="bg-gray-200">
//                         <tr>
//                             <th className="py-2 px-4 border">Name</th>
//                             <th className="py-2 px-4 border">Email</th>
//                             <th className="py-2 px-4 border">Role</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {users.map((user, idx) => (
//                             <tr key={idx} className="border-t">
//                                 <td className="py-2 px-4 border">{user.name}</td>
//                                 <td className="py-2 px-4 border">{user.email}</td>
//                                 <td className="py-2 px-4 border">{user.role}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//                 <br/>
//             </div>
//             <div className="flex justify-center items-center"> 
//             <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded ">Logout</button>
//             </div>
//         </div>
//     );
// };


import React, { useEffect, useState, useCallback } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function UserList() {
     const navigate = useNavigate();
    const { user, token, logout } = useAuth();
    const [users, setUsers] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [formData, setFormData] = useState({ name: '', email: '', role: '' });

    const fetchUsers = useCallback(async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
            return;
        }

        try {
            const res = await fetch('http://localhost:5000/api/getusers', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = await res.json();

            if (res.status === 200) {
                setUsers(data.users);
            } else if (res.status === 401) {
                navigate('/login');
            } else {
                setError(data.message || 'Failed to fetch users');
            }
        } catch (err) {
            setError('Server error');
        }
    }, [navigate]);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    const startEdit = (index) => {
        setEditIndex(index);
        setFormData({ ...users[index] });
    };

    const handleChange = (e) => {
        setFormData(f => ({ ...f, [e.target.name]: e.target.value }));
    };

    const handleLogout = () => {
        logout();
        navigate('/login');
      };

    const saveEdit = async () => {
        const res = await fetch('http://localhost:5000/api/editusers', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
            body: JSON.stringify({
                email: users[editIndex].email,
                name: formData.name,
                newEmail: formData.email,
                role: formData.role,
            }),
        });
        const data = await res.json();
        if (data.success) {
            setUsers(data.users);
            setEditIndex(null);
        } else {
            alert(data.message);
        }
    };

    const deleteUser = async (email) => {
        if (!window.confirm('Confirm delete user?')) return;
        console.log("U: ", user?.role);

        const res = await fetch(`http://localhost:5000/api/deleteuser/${email}`, {
            method: 'DELETE',
            headers: { Authorization: `Bearer ${token}` },
        });
        console.log("U: " , user.role)
        const data = await res.json();
        if (data.success) setUsers(data.users);
        else alert(data.message);
    };

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">User List</h2>
            <table className="w-full border text-left">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="p-2 px-4 border">Name</th>
                        <th className="p-2 px-4 border">Email</th>
                        <th className="p-2 px-4 border">Role</th>
                        {user?.role === 'admin' && <th className="p-2">Actions</th>}
                    </tr>
                </thead>
                <tbody>
                    {users.map((u, i) => (
                        <tr key={u.email} className="border-t">
                            <td className="p-2 px-4 border">
                                {i === editIndex ? (
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="border p-1 w-full"
                                    />
                                ) : (
                                    u.name
                                )}
                            </td>
                            <td className="p-2 px-4 border">
                                {i === editIndex ? (
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="border p-1 w-full"
                                    />
                                ) : (
                                    u.email
                                )}
                            </td>
                            <td className="p-2 px-4 border">
                                {i === editIndex ? (
                                    <select
                                        name="role"
                                        value={formData.role}
                                        onChange={handleChange}
                                        className="border p-1"
                                    >
                                        <option value="user">user</option>
                                        <option value="admin">admin</option>
                                    </select>
                                ) : (
                                    u.role
                                )}
                            </td>
                            {user?.role === 'admin' && (
                                <td className="p-2 space-x-2">
                                    {i === editIndex ? (
                                        <button
                                            onClick={saveEdit}
                                            className="bg-green-500 text-white px-2 py-1 rounded"
                                        >
                                            Save
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => startEdit(i)}
                                            className="bg-blue-500 text-white px-2 py-1 rounded"
                                        >
                                            Edit
                                        </button>
                                    )}
                                    <button
                                        onClick={() => deleteUser(u.email)}
                                        className="bg-red-500 text-white px-2 py-1 rounded"
                                    >
                                        Delete
                                    </button>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table> <br/> <br/>

            <div className="flex justify-center items-center"> 
            <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded ">Logout</button>
            </div>
        </div>
        

    );
}


