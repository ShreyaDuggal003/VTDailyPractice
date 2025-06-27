import React, { useState, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';


export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmpassword: '',
    role: 'User'
  });

  const [error, setError] = useState('');

  const handleChange = useCallback(e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleSubmit = useCallback(async e => {
    e.preventDefault();
    if (form.password !== form.confirmpassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();

      console.log("STATUS: ", res.status)
      if (res.status === 404) {
        setError("User already exist");
      } else if (res.status === 401) {
        setError("Password doesn't match");
      } else if (res.ok) {
        localStorage.setItem('hasSignedUp', 'true');
        alert('Signup successful');
        navigate('/login');
      } else {
        alert(data.message || 'Signup failed');
      }
      
    } catch {
      alert('Server error');
    }
  }, [form, navigate]);

  return (
    <div className="flex flex-col items-center mt-20">
      <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md w-80 rounded">
        <h2 className="text-2xl mb-4 text-center">Signup</h2>
        <input type="text" name="name" onChange={handleChange} placeholder="Name" className="border p-2 mb-4 w-full" required />
        <input type="email" name="email" onChange={handleChange} placeholder="Email" className="border p-2 mb-4 w-full" required />
        <input type="password" name="password" onChange={handleChange} placeholder="Password" className="border p-2 mb-4 w-full" required />
        <input type="password" name="confirmpassword" onChange={handleChange} placeholder="Confirm Password" className="border p-2 mb-4 w-full" required />
        <select name="role" onChange={handleChange} className="border p-2 mb-4 w-full">
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select> <br/>
        {error && <div className="text-red-500 text-center mb-2">{error}</div>}
        <button type="submit" className="w-full bg-green-600 text-white p-2 rounded">Signup</button>
        {/* <p className="mt-3 text-center">
          Already have an account? <Link to="/login" className="text-blue-600">Login</Link>
        </p> */}
      </form>
    </div>
  );
}
