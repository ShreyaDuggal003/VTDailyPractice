
import React, { useMemo } from 'react';
import { useAuth } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const { auth, logout } = useAuth();
  const navigate = useNavigate();

  const userInfo = auth?.user || {};

  const handleLogout = () => {
    console.log("USERINFO: ", userInfo)
    logout();
    navigate('/login');
  };

  return (
    <div className="flex flex-col items-center mt-20">
      <h2>Welcome, {userInfo.name}!</h2>
      <p>Email: {userInfo.email}</p> <br/>
      <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
    </div>
  );
}