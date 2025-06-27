import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = useCallback(e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleSubmit = useCallback(async e => {
    e.preventDefault();
    
    try {
      const res = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();

      if (res.status === 404) {
        setError("User doesn't exist, SignUp first");
        setTimeout(() => navigate('/signup'), 1500);
      } else if (res.status === 401) {
        setError("Incorrect password");
      } else if (res.ok) {
        login(data.token, data.user);
        set
        navigate('/users');
      } else {
        setError('Login failed');
      }
    } catch {
      setError('Server error');
    }
  }, [form, login, navigate]);

  return (
    <div className="flex flex-col items-center mt-20">
      <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md w-80 rounded">
        <h2 className="text-2xl mb-4 text-center">Login</h2>

        <input type="email" name="email" onChange={handleChange} placeholder="Email" className="border p-2 mb-4 w-full" required />
        <input type="password" name="password" onChange={handleChange} placeholder="Password" className="border p-2 mb-4 w-full" required />

        {error && <div className="text-red-500 text-center mb-2">{error}</div>}

        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Login</button>

        <p className="text-sm text-blue-500 cursor-pointer mt-2 text-right" onClick={() => navigate('/forgotpassword')}>
          Forgot Password?
        </p>

        <p className="mt-3 text-center">
          Don't have an account? <Link to="/signup" className="text-blue-600">Signup</Link>
        </p>
      </form>
    </div>
  );
}